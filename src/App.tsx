import { useEffect, useState } from 'react'
import { useRef } from 'react';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import PrinterIcon from './assets/printer.svg'
import LocationIcon from './assets/location-share.svg'
import Header from './Header'
import Footer from './Footer'
import CardGraph from './CardGraph'
type DataProp = {
  data: object[],
  keys: string[],
  title: string
}
function App() {
  const page = useRef<HTMLDivElement>(null)
  const [showSection, setShowSection] = useState<boolean>(false)
  const [data, setData] = useState<DataProp[]>([])

  useEffect(() => {
    if (showSection) setTimeout(() => {
      generatePDF(page, {
        filename: 'page.pdf',
        resolution: Resolution.MEDIUM,
        page: {
          margin: Margin.MEDIUM
        }
      })

    }, 2000);
  }, [showSection])
  useEffect(() => {
    async function getData() {
      await fetch('https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv').then(a => a.json()).then(docs => {
        if (docs) setData(docs)
      })
    }
    getData()
  }, [])
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-white'>
      {
        !showSection ? <button className='flex gap-2 rounded-2xl w-[109px] h-[56px] items-center' onClick={() => setShowSection(!showSection)}>
          <img src={PrinterIcon} />
          <span className='capitalize text-base text-white'>print</span>
        </button>
          : <div className='max-w-[1240px] m-auto mt-4' ref={page}>
            <Header />
            <div className='flex flex-col gap-[18px] my-10' >
              <div className='flex items-center'>
                <img src={LocationIcon} />
                <span className='font-poppins text-[#090E24] text-[10px] ml-1'>Crime</span>
                <div className='w-full bg-gradient-to-r from-[#005DFF] to-[#21DDFF] h-[2px] ml-2'></div>
              </div>
              <CardGraph source={data} />
            </div>
            <Footer />
          </div>
      }
    </div>
  )
}

export default App
