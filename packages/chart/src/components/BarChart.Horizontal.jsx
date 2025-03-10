import React, { useContext } from 'react'
import ConfigContext from '../ConfigContext'
import { useBarChart } from '../hooks/useBarChart'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { BarGroup } from '@visx/shape'
import { useHighlightedBars } from '../hooks/useHighlightedBars'

// third party
import chroma from 'chroma-js'

export const BarChartHorizontal = props => {
  const { xScale, yScale, yMax, seriesScale } = props
  const { transformedData: data, colorScale, seriesHighlight, config, formatNumber, formatDate, parseDate, setSharedFilter, isNumber, getTextWidth, getYAxisData, getXAxisData } = useContext(ConfigContext)
  const { isHorizontal, barBorderWidth, hasMultipleSeries, applyRadius, updateBars, assignColorsToValues, section, fontSize, isLabelBelowBar, displayNumbersOnBar, lollipopBarWidth, lollipopShapeSize, getHighlightedBarColorByValue, getHighlightedBarByValue } = useBarChart()

  const { HighLightedBarUtils } = useHighlightedBars(config)

  return (
    config.visualizationSubType !== 'stacked' &&
    config.visualizationType === 'Bar' &&
    config.orientation === 'horizontal' && (
      <Group>
        <BarGroup
          data={data}
          keys={config.runtime.barSeriesKeys || config.runtime.seriesKeys}
          height={yMax}
          x0={d => d[config.runtime.originalXAxis.dataKey]}
          x0Scale={yScale}
          x1Scale={seriesScale}
          yScale={xScale}
          color={() => {
            return ''
          }}
        >
          {barGroups => {
            return updateBars(barGroups).map((barGroup, index) => (
              <Group className={`bar-group-${barGroup.index}-${barGroup.x0}--${index} ${config.orientation}`} key={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} id={`bar-group-${barGroup.index}-${barGroup.x0}--${index}`} top={barGroup.y}>
                {barGroup.bars.map((bar, index) => {
                  const scaleVal = config.useLogScale ? 0.1 : 0

                  let highlightedBarValues = config.highlightedBarValues.map(item => item.value).filter(item => item !== ('' || undefined))

                  highlightedBarValues = config.xAxis.type === 'date' ? HighLightedBarUtils.formatDates(highlightedBarValues) : highlightedBarValues

                  let transparentBar = config.legend.behavior === 'highlight' && seriesHighlight.length > 0 && seriesHighlight.indexOf(bar.key) === -1
                  let displayBar = config.legend.behavior === 'highlight' || seriesHighlight.length === 0 || seriesHighlight.indexOf(bar.key) !== -1
                  let barHeight = config.barHeight
                  let barY = bar.value >= 0 && isNumber(bar.value) ? bar.y : yScale(0)
                  const barX = bar.value < 0 ? Math.abs(xScale(bar.value)) : xScale(0)
                  const barWidthHorizontal = Math.abs(xScale(bar.value) - xScale(scaleVal))
                  const barWidth = config.barHeight

                  const yAxisValue = formatNumber(bar.value, 'left')
                  const xAxisValue = config.runtime[section].type === 'date' ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey])) : data[barGroup.index][config.runtime.originalXAxis.dataKey]

                  const barPosition = bar.value < 0 ? 'below' : 'above'

                  // check if bar text/value string fits into  each bars.
                  let textWidth = getTextWidth(xAxisValue, `normal ${fontSize[config.fontSize]}px sans-serif`)
                  let textFits = textWidth < barWidthHorizontal - 5 // minus padding 5

                  // control text position
                  let textAnchor = textFits ? 'end' : 'start'
                  let textAnchorLollipop = 'start'
                  let textPadding = textFits ? -5 : 5
                  let textPaddingLollipop = 10
                  // if bars are negative we change positions of text
                  if (barPosition === 'below') {
                    textAnchor = textFits ? 'start' : 'end'
                    textPadding = textFits ? 5 : -5
                    if (config.isLollipopChart) {
                      textAnchorLollipop = 'end'
                      textPaddingLollipop = -10
                    }
                  }

                  // create new Index for bars with negative values
                  const newIndex = bar.value < 0 ? -1 : index
                  const borderRadius = applyRadius(newIndex)

                  let yAxisTooltip = config.runtime.yAxis.label ? `${config.runtime.yAxis.label}: ${yAxisValue}` : yAxisValue
                  let xAxisTooltip = config.runtime.xAxis.label ? `${config.runtime.xAxis.label}: ${xAxisValue}` : xAxisValue
                  if (!hasMultipleSeries) {
                    xAxisTooltip = config.isLegendValue ? `<p className="tooltip-heading">${bar.key}: ${xAxisValue}</p>` : config.runtime.xAxis.label ? `<p className="tooltip-heading">${config.runtime.xAxis.label}: ${xAxisValue}</p>` : xAxisValue
                  }

                  const tooltip = `<ul>
                  ${config.legend.showLegendValuesTooltip && config.runtime.seriesLabels && hasMultipleSeries ? `${config.runtime.seriesLabels[bar.key] || ''}<br/>` : ''}
                  <li class="tooltip-heading">${yAxisTooltip}</li>
                  <li class="tooltip-body">${xAxisTooltip}</li>
                    </li></ul>`

                  // configure colors
                  let labelColor = '#000000'
                  labelColor = HighLightedBarUtils.checkFontColor(yAxisValue, highlightedBarValues, labelColor) // Set if background is transparent'
                  let barColor = config.runtime.seriesLabels && config.runtime.seriesLabels[bar.key] ? colorScale(config.runtime.seriesLabels[bar.key]) : colorScale(bar.key)
                  barColor = assignColorsToValues(barGroups.length, barGroup.index, barColor) // Color code by category
                  const isRegularLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'regular'
                  const isTwoToneLollipopColor = config.isLollipopChart && config.lollipopColorStyle === 'two-tone'
                  const isHighlightedBar = highlightedBarValues?.includes(yAxisValue)
                  const highlightedBarColor = getHighlightedBarColorByValue(yAxisValue)
                  const highlightedBar = getHighlightedBarByValue(yAxisValue)
                  const borderColor = isHighlightedBar ? highlightedBarColor : config.barHasBorder === 'true' ? '#000' : 'transparent'
                  const borderWidth = isHighlightedBar ? highlightedBar.borderWidth : config.isLollipopChart ? 0 : config.barHasBorder === 'true' ? barBorderWidth : 0
                  // update label color
                  if (barColor && labelColor) {
                    if (chroma.contrast(labelColor, barColor) < 4.9) {
                      labelColor = textFits ? '#FFFFFF' : '#000000'
                    }
                  }
                  const background = () => {
                    if (isRegularLollipopColor) return barColor
                    if (isTwoToneLollipopColor) return chroma(barColor).brighten(1)
                    if (isHighlightedBar) return 'transparent'
                    return barColor
                  }
                  const finalStyle = {
                    background: background(),
                    borderColor,
                    borderStyle: 'solid',
                    borderWidth,
                    ...borderRadius
                  }

                  return (
                    <Group key={`${barGroup.index}--${index}`}>
                      {/* This feels gross but inline transition was not working well*/}
                      <style>
                        {`
                        .linear #barGroup${barGroup.index},
                        .Combo #barGroup${barGroup.index} {
                          transform-origin: 0 ${barY + barHeight}px;
                        }
                      `}
                      </style>
                      <Group key={`bar-sub-group-${barGroup.index}-${barGroup.x0}-${barY}--${index}`}>
                        <foreignObject
                          id={`barGroup${barGroup.index}`}
                          key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                          x={barX}
                          y={barWidth * bar.index}
                          width={barWidthHorizontal}
                          height={!config.isLollipopChart ? barWidth : lollipopBarWidth}
                          style={finalStyle}
                          opacity={transparentBar ? 0.5 : 1}
                          display={displayBar ? 'block' : 'none'}
                          data-tooltip-html={tooltip}
                          data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                          onClick={e => {
                            e.preventDefault()
                            if (setSharedFilter) {
                              bar[config.xAxis.dataKey] = yAxisValue
                              setSharedFilter(config.uid, bar)
                            }
                          }}
                        ></foreignObject>
                        {!config.isLollipopChart && displayNumbersOnBar && (
                          <Text // prettier-ignore
                            display={displayBar ? 'block' : 'none'}
                            x={bar.y}
                            y={config.barHeight / 2 + config.barHeight * bar.index}
                            fill={labelColor}
                            dx={textPadding}
                            verticalAnchor='middle'
                            textAnchor={textAnchor}
                          >
                            {yAxisValue}
                          </Text>
                        )}
                        {config.isLollipopChart && displayNumbersOnBar && (
                          <Text // prettier-ignore
                            display={displayBar ? 'block' : 'none'}
                            x={bar.y}
                            y={0}
                            fill={'#000000'}
                            dx={textPaddingLollipop}
                            textAnchor={textAnchorLollipop}
                            verticalAnchor='middle'
                            fontWeight={'normal'}
                          >
                            {yAxisValue}
                          </Text>
                        )}
                        {isLabelBelowBar && !config.yAxis.hideLabel && (
                          <Text x={config.yAxis.hideAxis ? 0 : 5} y={barGroup.height} dy={4} verticalAnchor={'start'} textAnchor={'start'}>
                            {config.runtime.yAxis.type === 'date'
                              ? formatDate(parseDate(data[barGroup.index][config.runtime.originalXAxis.dataKey]))
                              : isHorizontal
                              ? data[barGroup.index][config.runtime.originalXAxis.dataKey]
                              : formatNumber(data[barGroup.index][config.runtime.originalXAxis.dataKey])}
                          </Text>
                        )}

                        {config.isLollipopChart && config.lollipopShape === 'circle' && (
                          <circle cx={bar.y} cy={0 + lollipopBarWidth / 2} r={lollipopShapeSize / 2} fill={barColor} key={`circle--${bar.index}`} data-tooltip-html={tooltip} data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`} style={{ filter: 'unset', opacity: 1 }} />
                        )}
                        {config.isLollipopChart && config.lollipopShape === 'square' && (
                          <rect
                            x={bar.y > 10 ? bar.y - lollipopShapeSize / 2 : 0}
                            y={0 - lollipopBarWidth / 2}
                            width={lollipopShapeSize}
                            height={lollipopShapeSize}
                            fill={barColor}
                            key={`circle--${bar.index}`}
                            data-tooltip-html={tooltip}
                            data-tooltip-id={`cdc-open-viz-tooltip-${config.runtime.uniqueId}`}
                            style={{ opacity: 1, filter: 'unset' }}
                          >
                            <animate attributeName='height' values={`0, ${lollipopShapeSize}`} dur='2.5s' />
                          </rect>
                        )}
                      </Group>
                    </Group>
                  )
                })}
              </Group>
            ))
          }}
        </BarGroup>

        {Object.keys(config.confidenceKeys).length > 0
          ? data.map(d => {
              let xPos, yPos
              let upperPos
              let lowerPos
              let tickWidth = 5
              yPos = yScale(getXAxisData(d)) - 0.75 * config.barHeight
              upperPos = xScale(getYAxisData(d, config.confidenceKeys.upper))
              lowerPos = xScale(getYAxisData(d, config.confidenceKeys.lower))
              return (
                <path
                  key={`confidence-interval-h-${yPos}-${d[config.runtime.originalXAxis.dataKey]}`}
                  stroke='#333'
                  strokeWidth='px'
                  d={`
                    M${lowerPos} ${yPos - tickWidth}
                    L${lowerPos} ${yPos + tickWidth}
                    M${lowerPos} ${yPos}
                    L${upperPos} ${yPos}
                    M${upperPos} ${yPos - tickWidth}
                    L${upperPos} ${yPos + tickWidth} `}
                />
              )
            })
          : ''}
      </Group>
    )
  )
}
export default BarChartHorizontal
