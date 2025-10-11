import Explore from '../../assets/explore-btn.png';
const ExperienceHero = ({
  logo,
  alt,
  link,
}) => {
  return (
    <main className='dda-hero d-flex align-items-center justify-content-center min-vh-100 py-5'>
      <div className='dda-hero-card d-flex flex-column align-items-center text-center'>
        <img src={logo} alt={alt} className='dda-hero-logo img-fluid' />
        <div className='dda-hero-cta d-flex flex-column align-items-center'>
            <a target="_blank" href={link} type="button" className="bg-transparent border-0 p-0 text-decoration-none">
              <img src={Explore} className="w-100" alt="Explore" />
            </a>
        </div>
      </div>
    </main>
  );
};

export default ExperienceHero;
