import React, { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import { Markup } from 'interweave'

import ErrorBoundary from '@cdc/core/components/ErrorBoundary'
import Loading from '@cdc/core/components/Loading'

import ConfigContext from './ConfigContext'
import EditorPanel from './components/EditorPanel'
import defaults from './data/initial-state'

import Overlay from '@cdc/core/components/ui/Overlay'
import Modal from '@cdc/core/components/ui/Modal'
import Button from '@cdc/core/components/elements/Button'

import './scss/main.scss'

import { useGlobalContext } from '@cdc/core/components/GlobalContext'

const CdcMarkupInclude = (
  {
    configUrl,
    config: configObj,
    isDashboard = false,
    isEditor = false,
    setConfig: setParentConfig
  }
) => {

  // Default States
  const [ config, setConfig ] = useState({ ...defaults })
  const [ loading, setLoading ] = useState(true)

  // Custom States
  const [ urlMarkup, setUrlMarkup ] = useState('')
  const [ markupError, setMarkupError ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)

  let {
    title
  } = config

  // Default Functions
  const updateConfig = (newConfig) => {
    Object.keys(defaults).forEach(key => {
      if (newConfig[key] && 'object' === typeof newConfig[key] && !Array.isArray(newConfig[key])) {
        newConfig[key] = { ...defaults[key], ...newConfig[key] }
      }
    })

    newConfig.runtime = {}
    newConfig.runtime.uniqueId = Date.now()

    newConfig.runtime.editorErrorMessage = ''
    setConfig(newConfig)
  }

  const loadConfig = useCallback(async () => {
    let response = configObj || await (await fetch(configUrl)).json()
    let responseData = response.data ?? {}

    if (response.dataUrl) {
      const dataString = await fetch(response.dataUrl)
      responseData = await dataString.json()
    }

    response.data = responseData

    updateConfig({ ...defaults, ...response })
    setLoading(false)
  }, [])

  // Custom Functions
  useEffect(() => {
    if (markupError) {
      let errorCode = markupError
      let message = 'There was a problem retrieving the content from ' + config.srcUrl + '. '
      let protocolCheck = /https?:\/\//g

      if (errorCode === 404 && !config.srcUrl.match(protocolCheck)) {
        errorCode = 'proto' //Capture 404 caused by missing protocols and adjust message
      }

      let errorList = {
        200: 'This is likely due to a CORS restriction policy from the remote origin address.',
        404: 'The requested source URL cannot be found. Please verify the link address provided.',
        'proto': 'Provided source URL must include https:// or http:// before the address (depending on the source content type).'
      }

      message += errorList[errorCode]
      setErrorMessage(message)
    } else {
      setErrorMessage(null)
    }
  }, [ markupError ])

  const loadConfigMarkupData = useCallback(async () => {
    setMarkupError(null)

    if (config.srcUrl) {
      if (config.srcUrl === '#example') {
        setUrlMarkup('<!doctype html><html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title> </head> <body> <h1>Header</h1> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p> <br> <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. </p><br><p>She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.</p></body></html>')
      } else {
        try {
          await axios
            .get(config.srcUrl)
            .then((res) => {
              if (res.data) {
                setUrlMarkup(res.data)
              }
            })
        } catch (err) {
          if (err.response) {
            // Response with error
            setMarkupError(err.response.status)
          } else if (err.request) {
            // No response received
            setMarkupError(200)
          }

          setUrlMarkup('')
        }
      }
    } else {
      setUrlMarkup('')
    }
  }, [ config.srcUrl ])

  const parseBodyMarkup = (markup) => {
    let parse
    let hasBody = false
    if (markup && markup !== '' && markup !== null) {
      if (markup.toString().match(/<body[^>]*>/i) && markup.toString().match(/<\/body\s*>/i)) {
        hasBody = true
        parse = markup.toString().match(/<body[^>]*>([^<]*(?:(?!<\/?body)<[^<]*)*)<\/body\s*>/i)
      } else {
        parse = markup.toString()
      }
    }

    return hasBody ? parse[1] : parse
  }

  // Overlay & Modal
  let { overlay } = useGlobalContext()

  const callTest = () => {
    overlay.actions.toggleOverlay(false)
    alert('Called the function')
  }

  const testModal1 = () => {
    return (
      <Overlay>
        <Modal showClose={false}>
          <Modal.Header>
            Modal Title 1
          </Modal.Header>
          <Modal.Content>
            This is a modal without a close button. There could be a lot of content to display but we're not sure how much
            is
            going to show in such a small area. This is why we need to test the length of the text that we're putting
            inside of each modal.
          </Modal.Content>
          <Modal.Footer>
            <div style={{ textAlign: 'right' }}>
              <Button className="muted" onClick={() => overlay.actions.toggleOverlay(false)}>Cancel</Button>
              <Button className="success" onClick={() => callTest()}>Submit</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Overlay>
    )
  }

  const testModal2 = () => {
    return (
      <Overlay>
        <Modal showDividerTop={false}>
          <Modal.Content>
            This is a modal without a header or a top divider. There could be a lot of content to display, but we're not
            sure how much is
            going to show in such a small area. This is why we need to test the length of the text that we're putting
            inside of
            each modal.
          </Modal.Content>
          <Modal.Footer>
            <Button onClick={() => callTest()}>Trigger an Action</Button>
          </Modal.Footer>
        </Modal>
      </Overlay>
    )
  }

  const testModal3 = () => {
    return (
      <Overlay disableBgClose={true}>
        <Modal fontTheme={'light'} headerBgColor={'#d9006e'}>
          <Modal.Header>
            Disable Background Close
          </Modal.Header>
          <Modal.Content>
            <p>This is a modal where the background close is disabled. Either the default close button, or an action
              button <b><i>must</i></b> be available to the user in order to close the modal.</p>
          </Modal.Content>
        </Modal>
      </Overlay>
    )
  }

  const testModal4 = () => {
    return (
      <Overlay>
        <Modal fontTheme={'light'} headerBgColor={'#363955'}>
          <Modal.Header>
            General Information Modal
          </Modal.Header>
          <Modal.Content>
            <p>This is a modal with some general information. Anything can go here to give details or explain some
              information further. This can contain as much information as is needed in order to provide the proper
              context for the content.</p>
          </Modal.Content>
        </Modal>
      </Overlay>
    )
  }

  const testModal5 = () => {
    return (
      <Overlay>
        <Modal fontTheme={'light'} headerBgColor={'#d73636'}>
          <Modal.Header>
            Warning Modal
          </Modal.Header>
          <Modal.Content>
            Making these changes will perform an unreversible action.
          </Modal.Content>
          <Modal.Footer>
            <div style={{ textAlign: 'center' }}>
              <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>Are you sure you want to continue?</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button className="warn" onClick={() => overlay.actions.toggleOverlay(false)}>No, Cancel</Button>
              <Button className="success" onClick={() => callTest()}>Yes, Continue</Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Overlay>
    )
  }

  //Load initial config
  useEffect(() => {
    loadConfig().catch((err) => console.log(err))
  }, [])

  //Reload config if config object provided/updated
  useEffect(() => {
    loadConfig().catch((err) => console.log(err))
  }, [ configObj?.data ])

  //Reload any functions when config is updated
  useEffect(() => {
    loadConfigMarkupData().catch((err) => console.log(err))
  }, [ loadConfigMarkupData ])

  let content = (<Loading/>)

  if (loading === false) {
    let body = (
      <>
        <div className="cove-component markup-include">
          {title &&
          <header className={`cove-component__header ${config.theme}`} aria-hidden="true">
            {parse(title)} {isDashboard}
          </header>
          }
          <div className="cove-component__content">
            {!markupError && urlMarkup &&
              <div className="cove-component__content-wrap">
                <Markup content={parseBodyMarkup(urlMarkup)}/>
              </div>
            }
            {markupError && config.srcUrl && <div className="warning">{errorMessage}</div>}
          </div>
        </div>
      </>
    )

    content = (
      <div className={`cove`} style={isDashboard ? { marginTop: '3rem' } : null}>
        {isEditor && <EditorPanel>{body}</EditorPanel>}
        {!isEditor && body}
        {overlay.object || null}
      </div>
    )
  }

  return (
    <ErrorBoundary component="CdcMarkupInclude">
      <ConfigContext.Provider
        value={{ config, updateConfig, loading, data: config.data, setParentConfig, isDashboard }}>
        {content}
      </ConfigContext.Provider>
    </ErrorBoundary>
  )
}

export default CdcMarkupInclude
