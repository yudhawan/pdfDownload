import LogoIcon from './assets/logo.svg'
const Header = () => {
    return (
        <header className='w-[100vh] h-[26px]'>
            <div className='flex justify-between'>
                <img src={LogoIcon} />
                <p className='m-0 font-poppins text-[#090E24] text-[9px]'>123 Main Street, Dover, NH 03820-4667</p>
            </div>
            <div className='w-full bg-gradient-to-r from-[#005DFF] to-[#21DDFF] h-[2px] mt-2'></div>
        </header>
    )
}

export default Header