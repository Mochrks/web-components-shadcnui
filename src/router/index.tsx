import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from '@/pages/homes/Home';
import NotFound from '@/components/demo/NotFound';
import Dashboard from '@/pages/layouting/dashboards/Dashboard';
import AuthentificationPages from '@/pages/layouting/authentification/AuthenntificationPages';
import UserProfilePages from '@/pages/layouting/user-profiles/UserProfilesPages';
import EcommercePages from '@/pages/layouting/e-commerce/EcommercePages';
import MultiStep from '@/pages/layouting/multi-step-forms/MultiStep';
import NotificationAndMessaging from '@/pages/layouting/notification-messaging/NotificationAndMessaging';
import CodingPracticePage from '@/pages/layouting/coding-practive-text-editor/CodingPracticePage';
import UserFeedbackAndRating from '@/pages/layouting/user-feedback-rating/UserFeedbackAndRating';
import CarouselPage from '@/pages/layouting/corousel-images/CarouselPage';
import HeroBGAnimation from '@/pages/layouting/hero-bg-animation/HeroBGAnimation';
import LoadingAnimations from '@/pages/layouting/loading-animation/LoadingAnimations';
import AlertLayout from '@/pages/layouting/alert/AlertLayout';
import EnhancedModalDialogLayout from '@/pages/layouting/dialog-popup/EnhancedModalDialogLayout';
import FooterLayout from '@/pages/layouting/footer/FooterLayout';
import NavbarLayout from '@/pages/layouting/navbar/NavbarLayout';
import ModernFAQComponents from '@/pages/layouting/FAQ/ModernFAQLayout';
import ModernPricingComponents from '@/pages/layouting/pricing/ModernPricingComponents';
import ModernErrorComponents from '@/pages/layouting/404error/ModernErrorComponents';
import ModernTestimonialComponents from '@/pages/layouting/testimonial/ModernTestimonialComponents';
import ModernBlogComponents from '@/pages/layouting/blog-layout/ModernBlogComponents';
import RoadmapLayouts from '@/pages/layouting/roadmap/RoadmapLayouts';
import GalleryLayouts from '@/pages/layouting/gallery/GalleryLayouts';
import EventLayouts from '@/pages/layouting/event-page/EventLayouts';
import HelpCenterLayouts from '@/pages/layouting/help-center/HelpCenterLayouts';
import LMSLayouts from '@/pages/layouting/lms/LMSLayouts';
import ModernTeamLayouts from '@/pages/layouting/team-page/TeamLayouts';
import CMSLayout from '@/pages/layouting/cms/CMSLayout';
import OnboardingLayout from '@/pages/layouting/user-onboarding/OnboardingLayout';
import AffiliateLayout from '@/pages/layouting/affiliate/AffiliateLayout';
import CustomerSupportLayout from '@/pages/layouting/customer-support/CustomerSupportLayout';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />



            {/* component items */}




            {/* layouting section FE */}
            <Route path="/dashboard-layout" element={<Dashboard />} />
            <Route path="/authentification-layout" element={<AuthentificationPages />} />
            <Route path="/user-profiles-layout" element={<UserProfilePages />} />
            <Route path="/e-commerce-layout" element={<EcommercePages />} />
            <Route path="/multi-step-layout" element={<MultiStep />} />
            <Route path="/notif-message-layout" element={<NotificationAndMessaging />} />
            <Route path="/feedback-rating-layout" element={<UserFeedbackAndRating />} />
            <Route path="/coding-practice-layout" element={<CodingPracticePage />} />
            <Route path="/carousel-layout" element={<CarouselPage />} />
            <Route path="/hero-bg-layout" element={<HeroBGAnimation />} />
            <Route path="/loading-animation-layout" element={<LoadingAnimations />} />
            <Route path="/alert-layout" element={<AlertLayout />} />
            <Route path="/modal-dialog-layout" element={<EnhancedModalDialogLayout />} />
            <Route path="/footer-layout" element={<FooterLayout />} />
            <Route path="/navbar-layout" element={<NavbarLayout />} />
            <Route path="/faq-pages-layout" element={<ModernFAQComponents />} />
            <Route path="/pricing-pages-layout" element={<ModernPricingComponents />} />
            <Route path="/404-error-layout" element={<ModernErrorComponents />} />
            <Route path="/testimonial-pages-layout" element={<ModernTestimonialComponents />} />
            <Route path="/blog-pages-layout" element={<ModernBlogComponents />} />
            <Route path="/team-pages-layout" element={<ModernTeamLayouts />} />
            <Route path="/roadmap-pages-layout" element={<RoadmapLayouts />} />
            <Route path="/gallery-pages-layout" element={<GalleryLayouts />} />
            <Route path="/event-pages-layout" element={<EventLayouts />} />
            <Route path="/help-center-layout" element={<HelpCenterLayouts />} />
            <Route path="/lms-layout" element={<LMSLayouts />} />
            <Route path="/cms-layout" element={<CMSLayout />} />
            <Route path="/user-onboarding-layout" element={<OnboardingLayout />} />
            <Route path="/affiliate-program-layout" element={<AffiliateLayout />} />
            <Route path="/customer-support-layout" element={<CustomerSupportLayout />} />
        </Routes>
    );
};

export default AppRoutes;
