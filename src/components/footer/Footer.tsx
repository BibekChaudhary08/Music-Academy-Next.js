import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white p-8'>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div>
                    <h1 className='text-xl font-bold mb-4'>About</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet a impedit temporibus debitis quasi placeat nostrum accusamus ipsum ut provident molestiae reprehenderit id, laudantium nemo, harum iure ab ratione pariatur.</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-4'>Quick Links</h1>
                    <div className='flex flex-col space-y-2'>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/courses">Courses</Link>
                        <Link href="/contact-us">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-4'>Follow Us</h1>
                    <div className='flex flex-col space-y-2'>
                        <a href='/facebook'>Facebook</a>
                        <a href='/instagram'>Instagram</a>
                        <a href='/github'>Github</a>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-4'>Contact Us</h1>
                    <p>Lokanthali, Bhaktapur</p>
                    <a href='mailto:bibekch0728n@gmail.com'>Email: bibekch0728n@gmail.com</a>
                    <p>Phone no: 9800654001</p>
                </div>
            </div>
            <div className='text-center mt-8'>
                <p>All Right Reserved @2024</p>
            </div>
        </div>
    )
}

export default Footer;
