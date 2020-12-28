import React from 'react'
import './Resources.scss'
import { ReactComponent as JournalingSVG } from '../../assets/undraw_reading_time_gvg0.svg'
import { ReactComponent as WhatToWriteSVG } from '../../assets/undraw_searching_p5ux.svg'
import { ReactComponent as TypesOfJournalingSVG } from '../../assets/undraw_ideas_s70l.svg'
import { ReactComponent as LearnMoreSVG } from '../../assets/undraw_reading_0re1.svg'
import { ReactComponent as PresenceBlurbSVG } from '../../assets/undraw_through_the_park_lxnl.svg'

export default function Resources() {
  return (
    <div className="resources">
      <div className="presence-blurb">
        <h1>Reflection</h1>
        <p>At Presence we see journaling as both a reflective practice rooted in history and a topic of modern science. This is why we are as equally committed to providing a platform for journaling and also providing resources about the practice of journaling. </p>
        <PresenceBlurbSVG className="presence-blurb-svg"/>
      </div>
      <div className="what-is-journaling">
        <JournalingSVG className="what-is-journaling-svg" />
        <div className="what-is-journaling-right">
          <h1>What is Journaling</h1>
          <p>
            Journaling generally involves the practice of keeping a diary or journal that explores thoughts and feelings surrounding the events of your life. There are several different ways to do this. Journaling, as a stress management and self-exploration tool, works best when done consistently, but even occasional, sporadic journaling can be stress relieving when the practice is focused on gratitude or emotional processing.
          </p>
        </div>
      </div>
      <div className="what-to-write">
        <div className="what-to-write-left">
          <h1>What Should I Write</h1>
          <p>
            Sometimes it can seem daunting to think of a meaningful topic to write about. At Presence we take some of the pressure of figuring out what to write off of you by providing daily prompts to promote thought and self-reflection, but don't feel the need to journal solely in line with our daily prompts. Ulitamtely no topic is too big or too small to get you started. Write about your goals, what you did today, things that you're grateful for; anything that comes to mind can be a great place to start a session.
          </p>
        </div>
        <WhatToWriteSVG className="what-to-write-svg"/>
      </div>
      <div className="journaling-types">
        <TypesOfJournalingSVG className="journaling-types-svg"/>
        <div className="journaling-types-right">
          <h1>Types of Journaling</h1>
          <p>There are many ways to practice journaling and no one way fits all. Ultiamtely takign the time to reflect on our thoughts amnd emotions of the most important takeaway from this practice. Here are some exmaples of common journaling practices:</p>

          <ul>
            <a
              href="https://www.oprahmag.com/life/work-money/a32155559/how-to-start-a-bullet-journal/">
              <li>Bullet Journaling</li>
            </a>
            <a
              href="https://ggia.berkeley.edu/practice/gratitude_journal">
              <li>Gratitude Journaling</li>
            </a>
            <a
              href="https://writingthroughlife.com/journal-writing-tips-the-benefits-of-freewriting/">
              <li>Free Form Journaling</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="learn-more">
        <LearnMoreSVG className="learn-more-svg"/>
        <h1>Learn more about Journaling</h1>
        <ul>
          <a
            href="https://contentmentquesting.com/perfect-type-of-journaling/">
            <li>Find the Perfect Type of Journaling for You</li>
          </a>
          <a
            href="https://www.huffpost.com/entry/benefits-of-journaling-_b_6648884">
            <li>10 Surprising Benefits From Keeping a Journal</li>
          </a>
          <a
            href="https://positivepsychology.com/benefits-of-journaling/">
            <li>How jouranling works</li>
          </a>
          <a
            href="/">
            <li>83 Benefits of Journaling for Depression, Anxiety, and Stress</li>
          </a>
          <a
            href="https://intermountainhealthcare.org/blogs/topics/live-well/2018/07/5-powerful-health-benefits-of-journaling/">
            <li>Writing to Better Health</li>
          </a>
          <a
            href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?ContentID=4552&ContentTypeID=1">
            <li>Journaling for Mental Health</li>
          </a>
        </ul>
      </div>
    </div>
  )
}
