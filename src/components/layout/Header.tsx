import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { NAVIGATION } from '../../config/constants';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full pt-8 pb-4">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Digital Mind+ Group" className="h-12 w-auto object-contain" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-white/90 hover:text-white"
              >
                {item.label} {item.label === 'Filiales' && '▼'}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="white" className="rounded-full font-bold">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
