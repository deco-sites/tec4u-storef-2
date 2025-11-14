import { useScript } from "@deco/deco/hooks";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface MenuItem {
  label: string;
  href: string;
  highlight?: boolean;
  children?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

export interface Language {
  code: string;
  label: string;
}

export interface Props {
  logo?: ImageWidget;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  menuItems?: MenuItem[];
  languages?: Language[];
  currentLanguage?: string;
  contactButton?: {
    label: string;
    href: string;
  };
}

const DEFAULT_MENU_ITEMS: MenuItem[] = [
  {
    label: "SOLUÇÕES",
    href: "/solucoes",
    children: [
      { label: "E-commerce", href: "/solucoes/ecommerce", description: "Lojas online completas" },
      { label: "Sites Institucionais", href: "/solucoes/sites", description: "Presença digital profissional" },
      { label: "Sistemas", href: "/solucoes/sistemas", description: "Desenvolvimento sob medida" },
      { label: "Integrações", href: "/solucoes/integracoes", description: "Conecte seus sistemas" },
    ],
  },
  { label: "SOBRE NÓS", href: "/sobre" },
  { label: "BLOG", href: "/blog" },
  { label: "CASES", href: "/cases" },
  { label: "LOJA DE LAYOUTS", href: "/layouts", highlight: true },
];

const DEFAULT_LANGUAGES: Language[] = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

const onLoad = () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const body = document.body;

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.remove('translate-x-full');
    body.style.overflow = 'hidden';
  });

  mobileMenuClose?.addEventListener('click', () => {
    mobileMenu?.classList.add('translate-x-full');
    body.style.overflow = '';
  });

  // Desktop dropdown toggles
  document.querySelectorAll('[data-dropdown-trigger]').forEach((trigger) => {
    const dropdown = trigger.nextElementSibling;
    let timeout: number;

    trigger.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown?.classList.remove('opacity-0', 'invisible', 'translate-y-2');
    });

    trigger.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown?.classList.add('opacity-0', 'invisible', 'translate-y-2');
      }, 150);
    });

    dropdown?.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
    });

    dropdown?.addEventListener('mouseleave', () => {
      dropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
    });
  });

  // Mobile accordion toggles
  document.querySelectorAll('[data-mobile-accordion]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector('[data-accordion-icon]');
      
      content?.classList.toggle('hidden');
      icon?.classList.toggle('rotate-180');
    });
  });

  // Language dropdown
  const langBtn = document.getElementById('language-btn');
  const langDropdown = document.getElementById('language-dropdown');

  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown?.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    langDropdown?.classList.add('hidden');
  });
};

export default function ModernHeader({
  logo = "https://assets.decocache.com/tec4u-storef-2/51b1474d-c7b4-4056-b9fe-cd2ec3910ee7/tec4u-logo.png",
  logoAlt = "TEC4U",
  logoWidth = 130,
  logoHeight = 40,
  menuItems = DEFAULT_MENU_ITEMS,
  languages = DEFAULT_LANGUAGES,
  currentLanguage = "pt",
  contactButton = { label: "CONTATO", href: "/contato" },
}: Props) {
  const currentLang = languages.find(l => l.code === currentLanguage) || languages[0];

  return (
    <>
      <header class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#FDF4FF] via-white to-white shadow-sm">
        <div class="container mx-auto px-4 lg:px-6">
          <div class="flex items-center justify-between lg:justify-start h-20 lg:h-24 gap-8">
            {/* Logo - Centralizado no mobile, à esquerda no desktop */}
            <a 
              href="/" 
              class="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0 flex-shrink-0 z-50"
            >
              <Image
                src={logo}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                class="h-7 lg:h-9 xl:h-10 w-auto object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </a>

            {/* Desktop Menu - Centralizado */}
            <nav class="hidden lg:flex items-center justify-center flex-1 gap-8 xl:gap-10">
              {menuItems.map((item) => (
                <div class="relative group">
                  {item.children ? (
                    <>
                      <button
                        data-dropdown-trigger
                        class={`flex items-center gap-1.5 text-[15px] font-semibold tracking-tight transition-colors hover:text-[#E84393] ${
                          item.highlight ? "text-[#E84393]" : "text-gray-900"
                        }`}
                      >
                        {item.label}
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown */}
                      <div class="absolute top-full left-0 pt-4 opacity-0 invisible translate-y-2 transition-all duration-200">
                        <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 min-w-[280px]">
                          {item.children.map((child) => (
                            <a
                              href={child.href}
                              class="block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#FDF4FF] hover:to-white transition-all group/item"
                            >
                              <div class="font-semibold text-gray-900 group-hover/item:text-[#E84393] transition-colors">
                                {child.label}
                              </div>
                              {child.description && (
                                <div class="text-sm text-gray-500 mt-0.5">
                                  {child.description}
                                </div>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      class={`text-[15px] font-semibold tracking-tight transition-colors hover:text-[#E84393] ${
                        item.highlight ? "text-[#E84393]" : "text-gray-900"
                      }`}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Section */}
            <div class="hidden lg:flex items-center gap-4 xl:gap-5">
              {/* Language Selector */}
              <div class="relative">
                <button
                  id="language-btn"
                  class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-900 hover:text-[#E84393] transition-colors rounded-lg hover:bg-[#FDF4FF]"
                >
                  <span class="uppercase tracking-wide">IDIOMA</span>
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div id="language-dropdown" class="hidden absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 min-w-[160px]">
                  {languages.map((lang) => (
                    <a
                      href={`?lang=${lang.code}`}
                      class={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        lang.code === currentLanguage
                          ? "bg-gradient-to-r from-[#A855F7] to-[#E84393] text-white"
                          : "hover:bg-[#FDF4FF] text-gray-900"
                      }`}
                    >
                      {lang.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <a
                href={contactButton.href}
                class="inline-flex items-center gap-2.5 px-7 xl:px-8 py-3.5 bg-gradient-to-r from-[#A855F7] to-[#E84393] text-white text-[15px] font-bold tracking-tight rounded-full hover:shadow-xl hover:shadow-purple-200 hover:scale-[1.02] transition-all duration-300"
              >
                {contactButton.label}
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              class="lg:hidden p-2 text-gray-900 hover:text-[#E84393] transition-colors z-50"
              aria-label="Menu"
            >
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        class="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gradient-to-br from-white via-[#FDF4FF] to-white shadow-2xl transform translate-x-full transition-transform duration-300 lg:hidden overflow-y-auto"
      >
        <div class="flex items-center justify-between p-4 border-b border-gray-200">
          <span class="text-lg font-bold">Menu</span>
          <button
            id="mobile-menu-close"
            class="p-2 text-gray-900 hover:text-[#E84393] transition-colors"
            aria-label="Fechar menu"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="p-4 space-y-1">
          {menuItems.map((item) => (
            <div>
              {item.children ? (
                <>
                  <button
                    data-mobile-accordion
                    class={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition-all ${
                      item.highlight
                        ? "text-[#E84393]"
                        : "text-gray-900 hover:bg-white/60"
                    }`}
                  >
                    {item.label}
                    <svg data-accordion-icon class="w-5 h-5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div class="hidden pl-4 space-y-1">
                    {item.children.map((child) => (
                      <a
                        href={child.href}
                        class="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#E84393] hover:bg-white/60 rounded-xl transition-all"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  class={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                    item.highlight
                      ? "text-[#E84393]"
                      : "text-gray-900 hover:bg-white/60"
                  }`}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div class="p-4 border-t border-gray-200 space-y-3">
          {/* Mobile Language Selector */}
          <div class="space-y-2">
            <div class="text-sm font-semibold text-gray-500 uppercase px-4 tracking-wide">Idioma</div>
            <div class="flex gap-2">
              {languages.map((lang) => (
                <a
                  href={`?lang=${lang.code}`}
                  class={`flex-1 px-4 py-2.5 text-center rounded-xl text-sm font-semibold transition-all ${
                    lang.code === currentLanguage
                      ? "bg-gradient-to-r from-[#A855F7] to-[#E84393] text-white shadow-lg"
                      : "bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {lang.code.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Contact Button */}
          <a
            href={contactButton.href}
            class="flex items-center justify-center gap-2.5 w-full px-6 py-3.5 bg-gradient-to-r from-[#A855F7] to-[#E84393] text-white font-bold rounded-full shadow-lg shadow-purple-200 hover:shadow-xl transition-all"
          >
            {contactButton.label}
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div class="h-20 lg:h-24" />

      <script dangerouslySetInnerHTML={{ __html: useScript(onLoad) }} />
    </>
  );
}
