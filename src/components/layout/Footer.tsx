import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SITE_CONFIG } from '../../config/constants';
import { Mail, MapPin, Phone, ArrowLeft, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full">
      {/* Top Pagination Bar */}
      <div className="border-t border-gray-200 bg-white py-6">
        <Container className="flex items-center justify-between text-xs font-bold text-gray-800">
          <Link to="#" className="flex items-center gap-2 hover:text-[#1288D9]">
            <ArrowLeft size={14} />
            <div>
              <span className="block text-[10px] font-normal text-gray-500">Précédent</span>
              DM+ Investment
            </div>
          </Link>
          <Link to="#" className="flex items-center gap-2 hover:text-[#1288D9] text-right">
            <div>
              <span className="block text-[10px] font-normal text-gray-500">Suivant</span>
              DM+ Academy
            </div>
            <ArrowRight size={14} />
          </Link>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="bg-[#2A3544] py-16 text-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="space-y-6">
              <img src="/logo.png" alt="Digital Mind+ Group" className="h-10 w-auto object-contain" />
              <p className="text-xs text-gray-400 leading-relaxed max-w-[250px]">
                L'excellence multi-domaine. Un groupe innovant fédérant nos filiales spécialisées pour des solutions complètes et intégrées.
              </p>
              <div className="flex gap-3">
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#1288D9] text-xs font-bold">in</a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#1288D9] text-xs font-bold">X</a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-[#1288D9] text-xs font-bold">ig</a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-bold">Nos Filiales</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white">Marketing</a></li>
                <li><a href="#" className="hover:text-white">Investment</a></li>
                <li><a href="#" className="hover:text-white">Technologies</a></li>
                <li><a href="#" className="hover:text-white">Academy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-bold opacity-0">Services</h4> {/* Spacer to align with columns if needed, or put Services here */}
              <ul className="space-y-3 text-xs text-gray-400 mt-[-36px]">
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Distribution</a></li>
                <li><a href="#" className="hover:text-white">Aviation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-bold">Contact</h4>
              <ul className="space-y-4 text-xs text-gray-400">
                <li className="flex items-center gap-3">
                  <Mail size={14} />
                  <span>{SITE_CONFIG.contact.email}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={14} />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5" />
                  <span className="max-w-[150px]">{SITE_CONFIG.contact.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row text-[10px] text-gray-500">
            <p>
              © {new Date().getFullYear()} DM+ Group. Tous droits réservés.
            </p>
            <div className="mt-4 flex gap-6 sm:mt-0">
              <a href="#" className="hover:text-white">Mentions légales</a>
              <a href="#" className="hover:text-white">Politique de confidentialité</a>
              <a href="#" className="hover:text-white">Cookies</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
