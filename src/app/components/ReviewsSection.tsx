'use client';
import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import siteContent from '@/data/siteContent.json';

const breakdown = [
  { stars: 5, pct: 100 },
  { stars: 4, pct: 0 },
  { stars: 3, pct: 0 },
  { stars: 2, pct: 0 },
  { stars: 1, pct: 0 },
];


const reviews = [
  {
    name: 'Hannah Cartwright',
    service: '',
    date: '01/01/2019',
    quote:
      'I have very thick, curly hair and I am very picky and did a lot of research before… Best at color was Renee. Would ABSOLUTELY recommend…',
    ref: 'https://maps.app.goo.gl/Yc5KaCCetUJvhDL56'
  },
  {
    name: 'Lori White',
    service: '',
    date: '01/01/2024',
    quote: 'I had my first appointment … today, and it was an absolute delight! Renee took care of my hair, providing a thorough wash, a meticulous cut, and a fabulous blowout. From the moment I walked in, the ambiance of the salon set a relaxing and welcoming tone, making me feel right at home.\nRenee was incredibly professional and attentive, ensuring that every detail was perfect and that I was comfortable throughout my visit. She listened to what I wanted and executed it flawlessly, giving me a look that truly exceeded my expectations. The end result was nothing short of stunning – I left the salon feeling refreshed and revitalized.\n…I’m already looking forward to my next appointment with Renee and would highly recommend her … to anyone seeking a top-notch hair experience!',
    ref: 'https://maps.app.goo.gl/sgy19DH3cSamCBiRA'
  },
  {
    name: 'Katie Leiss',
    service: 'Hair coloring, Hair extensions, Hairstyling',
    date: '01/01/2021',
    quote: '…Every visit has been excellent, I always leave feeling more relaxed, and more confident. Renee gave me a beautiful balayage and cut, and was amazingly quick! It’s evident she has a ton of knowledge and skill. Can’t wait to come back!',
    ref: 'https://maps.app.goo.gl/z7HV68W7nSzutWFm8'
  },
  {
    name: 'Lauren Sohacki',
    service: '',
    date: '01/01/2019',
    quote: 'Renee did such an amazing job! I got bangs for the first time (which I was honestly a little nervous about) and she completely put me at ease. I love how my hair turned out PLUS she gave me lots of great tips on how to style and care for my bangs. … I definitely plan to go back.',
    ref: 'https://maps.app.goo.gl/qXHzhuAy3fT7SrtP6'
  },
  {
    name: 'Viviann Quintanilla',
    service: 'Balayage, Haircut',
    date: '01/01/2022',
    quote: 'Renee has been cutting my hair for the last two years and she has done a phenomenal job thus far. I almost didn’t want to get my hair cut while she was out on maternity leave. I always look forward to all my appointments and always leave the salon satisfied.',
    ref: 'https://maps.app.goo.gl/HA6MziJ3xB7Amvue6'
  },
  {
    name: 'Kitty Shanahan',
    service: '',
    date: '01/01/2019',
    quote: 'Started coming here in February, and it is my new favorite place to go! I always have Renee. She is always so professional and positive. I love coming here! One of my favorite parts is having to get my hair shampooed and conditioned: the head massage is absolutely amazing. Truly a therapeutic experience!',
    ref: 'https://maps.app.goo.gl/yWbdc3DcTHv3QLEB9'
  },
  {
    name: 'Elizabeth Coyle',
    service: 'Balayage, Hair coloring, Haircut, Hair highlighting',
    date: '01/01/2023',
    quote: 'I love seeing Renee here for my balayage and haircut every few month! She is amazing and definitely one of the best stylists I’ve ever met. She is also extremely kind and has a beautiful heart. …Renee is a Gem … and so talented!!!! I will go to her FOREVER',
    ref: 'https://maps.app.goo.gl/fry7dBvps1BkwjMeA'
  },
  {
    name: 'K P',
    service: 'Blowouts, Bang trim, Haircut, Hairstyling, Balayage',
    date: '01/01/2023',
    quote: 'Renee cut my hair for the first time. I have just moved here from South Mississippi and had the same hair stylist for 10+ years, so worried that someone new would mess up my hair! I was so worried! But I read her bio on the website and I knew that is who I wanted to do my hair! I was running a few minutes late because I am still so terrible with directions in this area even with gps! She was was waiting for me at the front door and still did my hair! I am so happy I found her! I am going back in a couple of weeks to get my color done by her. I am so happy! 😁',
    ref: 'https://maps.app.goo.gl/h3otNvo66yzAGNQZ6'
  },
  {
    name: 'Hannah VanWingerden',
    service: '',
    date: '01/01/2022',
    quote: 'Renee is the absolute best. She always does a fantastic job and I always feel amazing after seeing her. Professional, fast and just wonderful. She fixed a horrible dye job that I had gotten somewhere else and made it look fantastic. Best cut and color you could ask for.',
    ref: 'https://maps.app.goo.gl/YVind2RocUCYVnPw7'
  },
  {
    name: 'Natasha N.',
    service: 'SSSSS',
    date: '01/01/2020',
    quote: 'I saw Renee and she was very kind, professional and down to Earth. She listened and gave me exactly what I was looking for. … I’ll definitely be back!',
    ref: 'https://maps.app.goo.gl/FLigjiGsz1bvkcsx7'
  },
  {
    name: 'Laura Moore',
    service: '',
    date: '01/01/2020',
    quote: 'I had my first appointment with Renee. My haircut is amazing and we set up an appointment for corrective color. Her knowledge and talent is amazing. So glad I found Therapy Salon and most importantly Renee.',
    ref: 'https://maps.app.goo.gl/JyqoRCwmWfTCkFaa6'
  },
  {
    name: 'Kelly Earle',
    service: 'Balayage, Haircut',
    date: '01/01/2021',
    quote: 'I’ve been [with] Renée … and I could not recommend [her] more! [She] listens to what you want and know what’s best for your hair!',
    ref: 'https://maps.app.goo.gl/AsKuYj9TdRmGgVbS9'
  },
  {
    name: 'Rebecca Bordonaro',
    service: 'Haircut, Hair highlighting',
    date: '01/01/2022',
    quote: 'Renee did an incredible job with my hair. I needed a complete overhaul due to overprocessing and sloppy hair cuts. She was up for the challenge and now my hair looks amazing!! So glad I found Renee!',
    ref: 'https://maps.app.goo.gl/yfrf94oNHkv74ZYdA'
  },
  {
    name: 'J Alexander',
    service: '',
    date: '01/01/2018',
    quote: 'Renee was a life saver after a horrible haircut at SuperCuts (bad idea! I know! haha!)  She was able to salvage the mess they made and did a great job fixing it! she was also able to squeeze me in in very short notice because I was desperate. I will definitely come back to this salon for Renee! … Renee, I cannot thank you enough!!',
    ref: 'https://maps.app.goo.gl/wztaugcQeUcXvA9J6'
  },
  {
    name: 'sneha hermy',
    service: 'Haircut',
    date: '01/01/2024',
    quote: 'Had a haircut with Renee ! She was amazing . Answered all my questions and was very professional . I loved my cut and consultation . Highly recommend',
    ref: 'https://maps.app.goo.gl/hg7TvtUQNtvLdpwx5'
  },
  {
    name: 'Jessica B',
    service: '',
    date: '01/01/2019',
    quote: 'Renee was wonderful. She listened to what I wanted in layman’s terms and created a haircut for me that I love.',
    ref: 'https://maps.app.goo.gl/esHaVMdoiczBbppG8'
  },
  {
    name: 'Falcon843 Malt',
    service: '',
    date: '01/01/2019',
    quote: 'Renee is FANTASTIC! I don’t go see her nearly enough but she ALWAYS does a phenomenal job, listens to me, gives me advice and makes me feel beautiful!',
    ref: 'https://maps.app.goo.gl/b6G2sMELX2nVRPAC8'
  },
  {
    name: 'Jess Russo',
    service: 'Haircut',
    date: '01/01/2022',
    quote: 'Had a great haircut with Renee! This salon is adorable and everyone was so friendly.',
    ref: 'https://maps.app.goo.gl/BjDJioGi2EJkMuKA6'
  },
  {
    name: 'A M',
    service: 'Hairstyling, Haircut',
    date: '01/01/2022',
    quote: 'Renee did layers on my hair and I couldn’t be more pleased. I finally found a stylist who understands my hair.',
    ref: 'https://maps.app.goo.gl/Pc9wQo9muN99okGw9'
  },
  {
    name: 'Momma Mac',
    service: 'Hairstyling',
    date: '01/01/2022',
    quote: 'Renee is awesome … You will not be disappointed',
    ref: 'https://maps.app.goo.gl/PGSwdqqjQvZzymDk9'
  },
  {
    name: 'Martha',
    service: 'Hairstyling, Haircut',
    date: '01/01/2022',
    quote: 'Renee is masterful.  Definitely knows what she’s doing.  Finally found the one.',
    ref: 'https://maps.app.goo.gl/6KCRy4mAzHW8eLkz6'
  },
  {
    name: 'Lorri Rivas',
    service: '',
    date: '01/01/2020',
    quote: 'Renee was FANTASTIC! Was able to create exactly what I asked for and was professional and friendly.',
    ref: 'https://maps.app.goo.gl/dknyxJSGMva9TwiB9'
  },
  {
    name: 'Francine Raymond',
    service: '',
    date: '01/01/2022',
    quote: 'Love  Renee! I can trust her and relax.',
    ref: 'https://maps.app.goo.gl/P8gF18EEXi1qyHy98'
  },
  {
    name: 'Erin Goldstein',
    service: '',
    date: '01/01/2022',
    quote: 'Renee Klein is the best!!! 💯 would recommend!',
    ref: 'https://maps.app.goo.gl/hsuptbZF4agbvmXo7'
  },
  {
    name: 'Kelly Ogden',
    service: 'Blowdry, Blowouts, Hair coloring, Hairstyling, Hair straightening',
    date: '01/01/2022',
    quote: 'Renee is great!',
    ref: 'https://maps.app.goo.gl/WEcYhcU4vneZcVey9'
  }

];

let pageBreakOn = 0
// special shuffle that keeps pairs of similar-length quotes together
const shuffleArray = <T,>(array: T[]): T[] => {
	// first sort the array on quote.length
	let pile = [...array]
	let first = false;
	while(! first) {
		let i = Math.floor(Math.random() * pile.length)
		// console.log(i, pile[i].quote?.length)
		if(pile[i] && pile[i].quote?.length < 200) {
			first = pile[i];
			// console.log('first', first)
			pile.splice(i, 1)
		}
	}

	pile.sort((a, b) => a.quote.length - b.quote.length);
	
	let ret = []

	while(pile.length > 1) {
		let even = 2 * Math.floor(Math.random() * (pile.length / 2));
		if(pile[even + 1]) {
			pile[even].gridClasses = ''
			pile[even + 1].gridClasses = ''
			if(pile[even].quote.length > 150 && Math.random() > 0.5) {
				pile[even].gridClasses += 'md:max-lg:col-span-2'
				pile[even + 1].gridClasses += 'md:max-lg:col-span-2'
			}

			ret.push(pile[even])
			ret.push(pile[even + 1])
			pile.splice(even, 2)
		}
	}
	first.gridClasses = '';
	ret.unshift(first)

	
	let fills = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]] // reflects starting with the aggregate in upper left.
	for(let r=0; r<ret.length; r++) {

		// lg
		// get next starting point in first row
		let myFill = 0
		
		for(let x=0; x<4; x++) {
			if(fills[0][x] === 0) {
				myFill = x
				fills[0][x] = 1
				break
			}
		}
		console.log(r, 'myfill', myFill, 'my length:', ret[r].quote.length, ret[r].name)
		
		if(ret[r].quote.length > 600) {
			// i can always go vertical... but for now let's only do that if we can't go horizontal
			if(myFill <= 1 && fills[0][myFill+1] == 0 && fills[0][myFill+2] == 0) {
				// can go horisontal to right
				ret[r].gridClasses += ' lg:col-span-3'
				fills[0][myFill+1] = 1
				fills[0][myFill+2] = 1
				console.log('No. ' + r + ' is going 3 across')
			} else {
				ret[r].gridClasses += ' lg:row-span-3'
				fills[1][myFill] = 1
				fills[2][myFill] = 1
				console.log('No. ' + r + ' is going 3 DOWN')
			}
			
		} else if(ret[r].quote.length > 265) {
			if(myFill <= 2 && fills[0][myFill+1] == 0) {
				ret[r].gridClasses += ' lg:col-span-2'
				fills[0][myFill+1] = 1
				console.log('No. ' + r + ' is going 2 across')
			} else {
				ret[r].gridClasses += ' lg:row-span-2'
				fills[1][myFill] = 1
				console.log('No. ' + r + ' is going 2 DOWN')
			}
			
		} else {
			// we already filled in the fills. no spans. this is one square. the default.
		}
		
		// if we filled the first row, move it up like upside down tetris
		console.log('fills is now', JSON.stringify(fills))
		if(fills[0].every(x => x === 1)) {
			fills.shift()
			fills.push([0,0,0,0])
			console.log('NEW ROW', JSON.stringify(fills))
			// if the first row is all empty, this is a good break candidate.
			if(r > 3 && ! pageBreakOn && fills[0].every(x => x === 0)) {
				pageBreakOn = r + 1
				console.log('should pageBreakOn', pageBreakOn)
			}

		}
	}
	if( ! pageBreakOn) {
		pageBreakOn = 9
	}


	// console.log('ret', ret)
	// ret.map(i => console.log(i.quote.length))

	return ret
}

const shuffleArrayXXX = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};



function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="StarIcon" variant="solid" size={18} />
      ))}
    </div>
  );
}

const formatRelativeDate = (dateString: string): string | null => {
  const date = new Date(dateString);
  const now = new Date();

  // Return null for future dates
  if (date > now) return null;

  const monthsDiff = (now.getFullYear() - date.getFullYear()) * 12 +
                     (now.getMonth() - date.getMonth());

  if (monthsDiff < 1) return "Less than a month ago";
  if (monthsDiff < 2) return "A month ago";
  if (monthsDiff <= 18) return monthsDiff + " months ago";
  return now.getFullYear() - date.getFullYear() + " years ago";
};






export default function ReviewsSection() {
  const [shuffledReviews, setShuffledReviews] = useState<typeof reviews>([]);
	const [showAllReviews, setShowAllReviews] = useState(false);
  useEffect(() => {
		let rs = shuffleArray(reviews)
    setShuffledReviews(rs);
  }, []);
  
  if (shuffledReviews.length === 0) return null;

	let havePageBreak = false

// console.log('shuffledReviews', shuffledReviews)
  return (
    <section id="reviews" className="relative bg-primary pt-16 pb-20 text-primary-foreground md:pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p data-reveal className="text-[15px] font-semibold uppercase tracking-[0.2em] text-accent">
            Ratings & reviews
          </p>
          <h2 data-reveal data-reveal-delay="100" className="font-display text-display-lg mt-4 font-medium">
            Don’t take my word for it.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(200px,auto)]">
          {/* Aggregate panel as first card */}
          <article
            data-reveal
            data-reveal-delay="100"
            className="flex flex-col justify-between rounded-[2rem] bg-background p-8 text-foreground"
          >
            <div>
              <p className="font-display text-8xl leading-none text-primary">5.0</p>
              <div className="mt-3 flex items-center gap-3">
                <Stars />
                <span className="text-[15px] text-muted-foreground">{shuffledReviews.length} verified reviews</span>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {breakdown.map((b) => (
                <li key={b.stars} className="flex items-center gap-3">
                  <span className="w-4 text-[15px] font-medium">{b.stars}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div
                      className={`h-full rounded-full bg-accent ${b.pct === 0 ? 'w-0' : ''}`}
                      style={b.pct === 0 ? undefined : { width: `${b.pct}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-[15px] text-muted-foreground">{b.pct}%</span>
                </li>
              ))}
            </ul>

            {/* <a
              href="https://www.google.com/maps/search/?api=1&query=Porto+Portugal+hair+salon"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[48px] items-center gap-2 text-[15px] font-semibold text-primary underline-offset-4 hover:underline"
            >
              Read all reviews on Google <Icon name="ArrowUpRightIcon" size={18} />
            </a> */}
          </article>

          {/* Review cards - shuffled */}
          {shuffledReviews.map((r, i) => {
            if (r.quote.indexOf(' ') === -1) return null;
						// Only render first 6 when collapsed, or all when expanded
						if (!showAllReviews && i >= pageBreakOn) return null;

						// Determine if this review is newly revealed (for animation)
						const isNewlyRevealed = showAllReviews && i >= pageBreakOn;

            return (
              <article
                key={r.name + i}
								data-reveal
								data-reveal-delay="100"
                className={`flex flex-col justify-between rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur-sm ${r.gridClasses ? r.gridClasses : ''} ${
									isNewlyRevealed ? 'animate-fadeInUp opacity-0' : ''
								}`}
              >
                <div>
                  <Stars />
									{/* {r.quote.length} | 
									{r.gridClasses} */}
                  <p className="font-display mt-4 text-xl leading-snug sm:text-2xl">“{r.quote}”</p>
                </div>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-primary-foreground/15 pt-4">
                  <div>
                    <p className="text-[16px] font-semibold">{r.name}</p>
                    <p className="text-[15px] text-primary-foreground/70">{formatRelativeDate(r.date)}</p>
                  </div>
                  {r.service && r.service.indexOf('SSS') === -1 && (
                    <span className="rounded-full bg-accent px-4 py-1 text-[15px] font-medium text-accent-foreground max-w-[50%] truncate">
                      {r.service}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

				{!showAllReviews && shuffledReviews.length > 6 && (
					<div className="mt-8 text-center">
						<button
							onClick={() => setShowAllReviews(true)}
							className="text-[15px] text-primary-foreground/70 hover:text-primary-foreground underline underline-offset-4 transition-colors"
						>
							View all {shuffledReviews.length} reviews
						</button>
					</div>
				)}

        <div data-reveal className="mt-12 flex justify-center">
          <a
            href={siteContent.site.bookingURL}
            className="inline-flex min-h-[64px] w-full items-center justify-center gap-3 rounded-full bg-accent px-10 text-lg font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
          >
            Join her happy clients — book&nbsp;now
            <Icon name="ArrowRightIcon" size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
