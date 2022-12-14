import { Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import { Box } from '@chakra-ui/react'
import getTimePeriods from 'utils/getTimePeriods'
import Timer from './Timer'
import useNextEventCountdown from '../../hooks/useNextEventCountdown'

interface CountdownProps {
  nextEventTime: number
  preCountdownText?: string
  postCountdownText?: string
}

const Countdown: React.FC<React.PropsWithChildren<CountdownProps>> = ({
  nextEventTime,
  preCountdownText,
  postCountdownText,
}) => {
  const secondsRemaining = useNextEventCountdown(nextEventTime)
  const { days, hours, minutes } = getTimePeriods(secondsRemaining)

  return (
    <>
      {secondsRemaining ? (
        <Flex display="inline-flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Box mb="34px">
            {preCountdownText && (
              <Heading mr="12px" color="#ffff">
                {preCountdownText}
              </Heading>
            )}
            <Timer
              minutes={minutes + 1} // We don't show seconds - so values from 0 - 59s should be shown as 1 min
              hours={hours}
              days={days}
            />
          </Box>
          {postCountdownText && <Heading color="#ffff">{postCountdownText}</Heading>}
        </Flex>
      ) : (
        <Skeleton height="41px" width="250px" />
      )}
    </>
  )
}

export default Countdown
