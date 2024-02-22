import Timeline from '@mui/lab/Timeline'
import './AboutSection.css'
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Card, CardContent, CardHeader } from '@mui/material'


function AboutTimelineItem(props: { date: string, content: string }) {
    return (
        <>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
                        <CardHeader title={props.date} />
                        <CardContent>{props.content}</CardContent>
                    </Card>
                </TimelineContent>
                <TimelineOppositeContent />
            </TimelineItem>
        </>
    )
}


function AboutSection() {
    return (
        <>
            <Timeline position='right'>
                <AboutTimelineItem date='2000' content='I decided to come to life' />
                <AboutTimelineItem date='2000' content='I decided to come to life' />
            </Timeline>
        </>
    )
}

export default AboutSection