import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  article = [{
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Billy Steele",
    "title": "Ember's upcoming Travel Mug 2+ can be tracked in Apple's Find My app",
    "description": "Apple's Find My app alerts iOS and Mac users when they've left an item behind or helps them locate something they've lost. Later this year, you'll be able to do just that with Ember's heated travel mug. A new version, dubbed the Travel Mug 2+, is on the way t…",
    "url": "https://www.engadget.com/ember-travel-mug-2-plus-first-look-ces-2023-035045240.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2023-01/46167800-8caa-11ed-bfeb-ecb41fa95742",
    "publishedAt": "2023-01-05T03:50:45Z",
    "content": "Apple's Find My app alerts iOS and Mac users when they've left an item behind or helps them locate something they've lost. Later this year, you'll be able to do just that with Ember's heated travel m… [+991 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Taiwan exports seen declining for fourth straight month in December - Reuters",
    "description": "Taiwan's exports in December likely dropped from a year earlier for the fourth month in a row amid fears of a global recession, uncertainties due to the war in Ukraine, and COVID-19 controls in China, according to a Reuters poll.",
    "url": "https://www.reuters.com/markets/asia/taiwan-exports-seen-declining-fourth-straight-month-december-2023-01-05/",
    "urlToImage": "https://www.reuters.com/resizer/RTFVS-FSK1TSGQdUZcqlh9vnHq4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CXEEMZLXPNIVJI2FDPM2J6F3ME.jpg",
    "publishedAt": "2023-01-05T06:35:00Z",
    "content": "TAIPEI, Jan 5 (Reuters) - Taiwan's exports in December likely dropped from a year earlier for the fourth month in a row amid fears of a global recession, uncertainties due to the war in Ukraine, and … [+1255 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "Google Urges Apple Not to 'Drop the Ball' on Fixing Messaging in New Billboard Pushing RCS",
    "description": "Google is continuing on with its #GetTheMessage campaign attempting to convince Apple to adopt the RCS messaging protocol, this time taking out a large New Year's-themed ad at Harmon Corner in Las Vegas.\n\n\n\n\n\nThe digital billboard urges Apple not to \"drop the…",
    "url": "https://www.macrumors.com/2023/01/04/google-apple-rcs-billboard-message/",
    "urlToImage": "https://images.macrumors.com/t/mdauKemQg0GUw73LffVOTBTY_Mc=/1600x/article-new/2023/01/apple-android-rcs-ad.jpg",
    "publishedAt": "2023-01-05T00:28:07Z",
    "content": "Google is continuing on with its #GetTheMessage campaign attempting to convince Apple to adopt the RCS messaging protocol, this time taking out a large New Year's-themed ad at Harmon Corner in Las Ve… [+1371 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MacRumors"
    },
    "author": "Juli Clover",
    "title": "CES 2023: Govee Launches Matter-Certified Light Strip",
    "description": "Smart home accessory maker Govee today announced the launch of a new two-meter LED Strip Light that is Matter-certified and able to work with Apple HomeKit, Google Home, and other smart home platforms that support Matter.\n\n\n\n\n\nGovee is partnering with Google …",
    "url": "https://www.macrumors.com/2023/01/04/ces-2023-govee-matter-light-strip/",
    "urlToImage": "https://images.macrumors.com/t/S4qgYYV6umM5YEE9yPdzIyayaWc=/1720x/article-new/2022/03/matter-iot-standard.jpg",
    "publishedAt": "2023-01-05T02:30:00Z",
    "content": "Smart home accessory maker Govee today announced the launch of a new two-meter LED Strip Light that is Matter-certified and able to work with Apple HomeKit, Google Home, and other smart home platform… [+489 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Techemails.com"
    },
    "author": "Internal Tech Emails",
    "title": "Bill Gates: \"I'm literally losing sleep over Java\"",
    "description": "I am worry a lot about how great Java/Javabeans and all the runtime work they are doing is and how much excitement this is generating. I am literally losing sleep over this issue since together with a move to more server based applications it seems like it co…",
    "url": "https://www.techemails.com/p/bill-gates-im-literally-losing-sleep-over-java",
    "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F79fc15fc-6ea8-4426-acad-117e6c349ba0_922x876.png",
    "publishedAt": "2023-01-05T04:33:23Z",
    "content": "From: Bill GatesSent: Monday, September 30, 1996 9:36 PMTo: Nathan MyhrvoldCc: Aaron ContorerSubject: Java runtime becomes the operating system\r\nI am worry a lot about how great Java/Javabeans and al… [+9627 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Police"
    },
    "author": "Manuel Vonau",
    "title": "Google's Matter Early Access Program wields results with Govee's newest light strip",
    "description": "Google and Govee team up to show off the Light Strip M1 at CES 2023",
    "url": "https://www.androidpolice.com/googles-matter-early-access-program-govees-newest-light-strip/",
    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2021/03/30/Govee-RGBIC-Led-Strip-Lights.png",
    "publishedAt": "2023-01-05T02:30:16Z",
    "content": "Matter will likely be the topic for smart homes in 2023, and CES is already preparing us for a flood of new and excellent smart home devices with support for the interoperability standard. Govee is r… [+1722 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "HYPEBEAST"
    },
    "author": "info@hypebeast.com (Hypebeast)",
    "title": "Shake Shack Readies Lunar New Year Hot Honey Menu",
    "description": "As the Lunar New Year is a time for feasting, celebrating, and coming together in the name of good health, good luck, and good fortune, Shake Shack Hong Kong is now readying a limited-time-only Hot Honey Menu to kick off the Year of the Rabbit. Aside from bei…",
    "url": "https://hypebeast.com/2023/1/shake-shack-hong-kong-lunar-new-year-hot-honey-menu-release-info",
    "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F01%2Fshake-shack-hong-kong-lunar-new-year-hot-honey-menu-release-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
    "publishedAt": "2023-01-05T04:06:59Z",
    "content": "As the Lunar New Year is a time for feasting, celebrating, and coming together in the name of good health, good luck, and good fortune, Shake Shack Hong Kong is now readying a limited-time-only Hot H… [+1237 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iMore"
    },
    "author": "heyimjoew@gmail.com (Joe Wituschek)",
    "title": "The next Apple Watch Ultra could feature a larger, brighter micro-LED display",
    "description": "Analyst Jeff Pu believes that Apple is replacing the OLED display of the Apple Watch Ultra with micro-LED.",
    "url": "https://www.imore.com/health-fitness/apple-watch/the-next-apple-watch-ultra-could-feature-a-larger-brighter-micro-led-display",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/7oXVkVU76xeFeZBS8o6Xyb-1200-80.jpg",
    "publishedAt": "2023-01-05T01:05:23Z",
    "content": "The OLED display on the Apple Watch Ultra could be short-lived.\r\nIn a research note, Jeff Pu, an analyst at the Hong Kong investment firm Haitong International Securities, said that Apple could be lo… [+1860 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "iMore"
    },
    "author": "heyimjoew@gmail.com (Joe Wituschek)",
    "title": "Apple TV Plus has released a sneak peek for season two of Foundation",
    "description": "Ahead of its release in the summer of 2023, Apple TV Plus has shared a sneak peek for the second season of Foundation.",
    "url": "https://www.imore.com/music-movies-tv/apple-tv/apple-tv-plus-has-released-a-sneak-peek-for-season-two-of-foundation",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/wEq6MEnLUAqM6fQFMyTEaU-1200-80.jpeg",
    "publishedAt": "2023-01-05T00:39:28Z",
    "content": "Apple TV Plus has just released a sneak peek of the highly anticipated second season of \"Foundation,\" the hit sci-fi series based on Isaac Asimov's eponymous novels.\r\nFans of the show have been eager… [+1451 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Les Numériques"
    },
    "author": "Louis Royer, Laure Renouard",
    "title": "Dossier : Photos portraits au smartphone : la juste restitution des carnations, une gageure ?",
    "description": "La reproduction de la juste couleur de la chair précède l’apparition de la photo numérique. Aujourd’hui, certains constructeurs, à l’image de Google et ses Pixel, font du respect des carnations un véritable argument marketing. Mais qu’en est-il réellement ?",
    "url": "https://www.lesnumeriques.com/telephone-portable/photos-portraits-au-smartphone-la-juste-restitution-des-carnations-une-gageure-a199893.html",
    "urlToImage": "https://cdn.lesnumeriques.com/optim/article/19/199893/bdb3e416-dossier-carnation__1200_630__0-132-2001-1182.jpeg",
    "publishedAt": "2023-01-05T06:00:00Z",
    "content": "Les dernières générations de Pixel signés Google ont, par le biais dune option baptisée Real Tone, mis en exergue un point important : la représentation des carnations par les appareils photo de smar… [+11143 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Low De Wei",
    "title": "CEO of Singapore’s Creative Sim Wong Hoo, Who Took on Apple, Dies at 67",
    "description": "(Bloomberg) -- Sim Wong Hoo, who founded Creative Technology Ltd. in Singapore before sparring with Apple Inc., has died. He was 67.Most Read from...",
    "url": "https://finance.yahoo.com/news/ceo-singapore-creative-sim-wong-024007967.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/JvATxRL5uQFw_OHe6dBLGg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/19f163eea2261ee3b591103584a06912",
    "publishedAt": "2023-01-05T02:40:07Z",
    "content": "(Bloomberg) -- Sim Wong Hoo, who founded Creative Technology Ltd. in Singapore before sparring with Apple Inc., has died. He was 67.\r\nMost Read from Bloomberg\r\nSim died peacefully on Jan. 4, the comp… [+1075 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "PCWorld"
    },
    "author": "Mark Hachman",
    "title": "AMD unleashes Ryzen 7000 laptop CPUs with drastically different architectures",
    "description": "AMD launched its Ryzen 7000 family of mobile processors at CES 2023 with a family spread across four different processor architectures—and with a new AI effort, Radeon XDNA, ushering in a future driven by artificial intelligence.\r\n\n\n\n\nRecall last September wh…",
    "url": "https://www.pcworld.com/article/1444850/amd-launches-mobile-ryzen-7000-cpus-prepping-for-an-ai-future.html",
    "urlToImage": "https://www.pcworld.com/wp-content/uploads/2023/01/amd-ryzen-9-7945hx.jpg?quality=50&strip=all&w=1024",
    "publishedAt": "2023-01-05T03:30:00Z",
    "content": "Skip to contentType your search and hit enter\r\nWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nAMD launched its Ryz… [+11308 chars]"
    },
    
    ]

    constructor(){
      super();
      console.log("Hello i am constructor of newsitem");
      this.state ={
        article : this.article,
        loading : false
      }
    }
    
  render() {
    return (
      <div className='container my-3'>
            <h2>News Top HeadLines</h2>
            <div className='row'>
              {this.state.article.map((element)=>{
                return <div className="col-md-3" key={element.url}>
                           <NewsItem title={element.title.slice(0,46)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                       </div> 
              })}
              
            </div>
      </div>
    )
  }
}

export default News
