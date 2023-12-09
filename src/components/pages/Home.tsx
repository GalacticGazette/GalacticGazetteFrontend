import Cover from '../Cover';
import Cards from '../Cards';
import '../../App.css';

function Home() {
    return (
        <div className='home'>
            <Cover />
            <Cards cardsPerPage={9} />
        </div>
    );
}

export default Home;