
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
type DataProp = {
    data: object[],
    keys: string[],
    title: string
}
const CardGraph = ({ source }: { source: DataProp[] | [] }) => {
    return (
        <div className='flex flex-col rounded-xl w-full'>
            <div className='pl-3 py-[7px] bg-[#E8EEFB] rounded-tl-xl rounded-tr-xl'><span className='font-poppins text-[9px] text-[#1463FF]'>Burglary</span></div>
            <div className='bg-[#F2F4F5] rounded-bl-xl rounded-br-xl h-fit py-3 px-[21px] flex items-center'>
                <div className='transform -rotate-90  font-poppins text-[9px] text-[#1E1E1E] w-fit '>Arrests</div>
                {/* @ts-ignore */}
                <LineChart width={800} height={151} margin={{ top: 8, right: 12, bottom: 8, left: 12 }} data={source?.data}>
                    <Line type='monotone' dataKey={'Burglary'} stroke='#1463FF' strokeWidth={3} />
                    <XAxis dataKey='data_year' />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke='#BAC2DB' vertical={false} />
                </LineChart>
            </div>
        </div>
    )
}

export default CardGraph