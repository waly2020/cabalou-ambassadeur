import '../../styles/home/sectionBlog.scss';
import Blog from './Blog';
export default function SectionBlog(){
    return (
        <div className='sectionBlog'>
            <div className='sb-titre'>
                <h2>Blog</h2>
                <p>
                    Est consectetur nostrud nisi consequat est sunt do sint dolor et.
                    Est consectetur nostrud nisi consequat est sunt do sint dolor et.
                </p>
                <div className='sb-blogs'>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <Blog/>
                    <div className='empty-div'></div>
                </div>
            </div>
        </div>
    );
}