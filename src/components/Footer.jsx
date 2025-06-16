import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">GHOSTLANZERS</h3>
            <p className="text-gray-400 text-sm">
              Crafting digital excellence with precision and innovation.<br/>
              We are available everywhere because we work remotely.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="/companies" className="hover:text-orange-400 transition-colors">Companies</a></li>
              <li><a href="/about" className="hover:text-orange-400 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">
              <b>Mail :</b> ghostlanzers@gmail.com<br/>
              <b>Bala :</b> +91-9987033774<br/>
              <b>Ganesh :</b> +91-9398729624<br/>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Social</h4>
            <div className="flex space-x-4">
              {[Github].map((Icon, index) => (
                <a
                  key={index}
                  href="https://github.com/GhostLanzers"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © 2025 All Rights Reserved, GHOSTLANZERS. Built with Passion and Precision.
        </div>
      </div>
    </footer>
  );
}

export default Footer;