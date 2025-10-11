import Explore from '../../assets/explore-btn.png';
const VIDEO_SRC =
  'https://player.vimeo.com/video/1126221661?h=29587f9209&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&controls=0';

const ExperienceHero = ({
  logo,
  alt,
  link,
}) => {
  return (
    <main className='dda-hero d-flex align-items-center justify-content-center min-vh-100 py-5'>
      <div className='dda-hero-bg' aria-hidden='true'>
        <iframe
          src={VIDEO_SRC}
    frameborder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    title="Background video"
        />
      </div>

      <div className='dda-hero-card d-flex flex-column align-items-center text-center'>
        <img src={logo} alt={alt} className='dda-hero-logo img-fluid' />

        <div className='dda-hero-cta d-flex flex-column align-items-center'>
            <a href={link}  target='_blank' className="bg-transparent border-0 p-0 text-decoration-none">
              <img src={Explore} className="w-100" alt="Explore" />
            </a>
        </div>
      </div>
    </main>
  );
};

export default ExperienceHero;
