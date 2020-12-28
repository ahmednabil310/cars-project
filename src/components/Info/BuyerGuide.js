import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function BuyerGuide() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div >
            <h2 style={{padding:'10px 110px',background:'#fafafc',color:'#343434',marginTop:'1px',fontWeight:'700'}}>Buyer-guide</h2>
            <div style={{padding:'0px 170px',fontSize:'14px',marginTop:'35px'}}><Link to='/' style={{color:'#343434',fontWeight:'500'}}>Home</Link> {'>'} <span style={{color:'#0073d8',fontWeight:'500'}}>Buyer-guide</span></div>

            {/* <h4 style={{padding:'0px 170px',fontWeight:'700',color:'#343434',marginTop:'35px'}}>Rules and regulation</h4> */}
        
            <div style={{padding:'0px 65px 0px 170px',color:'#343434',marginTop:'35px',marginBottom:'25px'}}>
            <b>Guidance for the car lovers </b>
<br/><br/>
Trying to figure out which car, truck, or SUV you should buy? Deciding between multiple vehicles can be a chore if you don't have the right tools. Just select the cars you're interested in from our comprehensive list of car models from 1990 till today.<br/>

Our powerful car comparison tool lets you compare multiple vehicles, so you can see how they stack up at a glance. Compare features, warranties, engines, fuel economy, passenger room and trunk space. See ratings and pros and cons for each vehicle, and compare not just MSRP but what people are actually paying and dealer invoice prices. You can compare competitive vehicles, or compare different trim levels or model years of the same car.<br/>

Our comparator isn't just about figuring out which car is better, it's about figuring out which car is best for you. Compare more than thrity easy-to-read data points, and find out what our editors and users think of each vehicle on your list.
<br/><br/>

<b> Comprehend about The Specifications </b> <br/><br/>

The table lists out the various prices and engine choices available for a particular model. The listed prices are listed as a range from the base price price to the full-options price, as seen in the central city of Dubai. Be aware that price are subject to inflation and dealer markups, so expect variations between 10% and 20% from the listed prices at the actual showroom. It is best to call your local dealer for actual prices.
<br/>
To understand the abbr/eviated entries within the specifications table, use these keys;
<br/>
2.5D	2.5-litre diesel engine<br/>
2.5TD	2.5-litre turbocharged diesel <br/>
*	Top speed electronically limited <br/>
2.5SC	2.5-litre supercharged engine <br/>
2.5TC	2.5-litre turbocharged engine 
ngine <br/>
5M  	5-speed manual <br/>
5A  	5-speed automatic <br/>
5AM	5-speed automanual <br/>
2.5H	2.5-litre hybr/id petrol engine <br/>
I4	4-cylinder engine in inline configuration <br/>
V6	6-cylinder engine in V-shaped configuration <br/>
FWD  	Front-wheel-drive platform <br/>
RWD  	Rear-wheel-drive platform <br/>
4WD  	Four-wheel-drive or all-wheel-drive platform <br/>
CVT	Continuously variable auto transmission <br/>
l/100km  	Litres of fuel consumed every 100 kms <br/>

<br/>

<b> Reliability And Resale Value Ratings</b><br/><br/>

The reliability ratings here are not based on any calculation. It is more of a subjective rating, based on the number of known problems, as well as the severity of those problems. It gives a rough idea of how often the owner of the car may face problems. All known problems are also listed, but only for cars older than three years in general.
<br/>
Similarly, the resale value ratings are based on relative prices in the used car market, and may vary depending on the mileage, condition and modifications done on the car. It should be used more as a reference on how easily a particular car model will sell compared to another similar model. For example, among midsize cars, a five-star Toyota Camry will be in higher demand and sell for a higher price than a three-star VW Passat from the same production year.

<br/>

<b>Safety Ratings </b><br/><br/>

The safety ratings are taken directly from American NHTSA and European EuroNCAP governmental crash tests. Results for crash tests performed by American NHTSA and European EuroNCAP governmental agencies are available via their respective websites, although data is not available for all models. Note that models sold in the GCC occasionally come with fewer safety features than the same models sold elsewhere. For example, while side-airbags are standard in most cars in the United States, most cars in the GCC do not have side-airbags.
<br/><br/>
The NHTSA ratings listed in our guide are only for a straight front-end crash at 56 kph, and based on injuries to the driver only. The fewer the injuries, the higher the number of stars. Front-passenger ratings are separately rated by the NHTSA, but are generally better than driver ratings anyway.
<br/><br/>
Additional tests listed on the NHTSA website include side-impact and rollover crashes, each rated separately. Looking at these other ratings in general, cars with side-airbags offer much more protection than cars without them. And 4WDs have a higher tendency to roll over than cars. Also, cars and 4WDs with stability control (ESP) are less likely to roll over.
<br/><br/>
The EuroNCAP ratings are more of an average, taking into account 64 kph front impacts, 50 kph side impacts and 29 kph pole impacts, as well as both driver and passenger seating positions. However, the EuroNCAP has separate ratings for adults and children. Only the adult ratings are listed in our guide. Where EuroNCAP ratings were not available, we listed Australian ANCAP ratings, which uses identical standards.
<br/><br/>
Additional tests listed on the EuroNCAP website show that children generally fare worse than adults in any accident, no matter what the vehicle, even taking into account child booster seats. The EuroNCAP also rates pedestrian safety separately, showing how likely a pedestrian is going to be injured when hit by a particular car.


    
            </div>
        </div>
    
    )
}
