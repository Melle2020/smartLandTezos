import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumsCommentsComponent } from './core/components/forums-comments/forums-comments.component';
import { ForumsTopicComponent } from './core/components/forums-topic/forums-topic.component';
import { ForumsComponent } from './core/components/forums/forums.component';
import { HelpcenterFaqsComponent } from './core/components/helpcenter-faqs/helpcenter-faqs.component';
import { HelpcenterGuidesComponent } from './core/components/helpcenter-guides/helpcenter-guides.component';
import { HelpcenterOverviewComponent } from './core/components/helpcenter-overview/helpcenter-overview.component';
import { HelpcenterSupportRequestComponent } from './core/components/helpcenter-support-request/helpcenter-support-request.component';
import { IndexJobComponent } from './core/components/index-job/index-job.component';
import { IndexOnepageComponent } from './core/components/index-onepage/index-onepage.component';
import { IndexComponent } from './core/components/index/index.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageAboutusTwoComponent } from './core/components/page-aboutus-two/page-aboutus-two.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageBlogDetailComponent } from './core/components/page-blog-detail/page-blog-detail.component';
import { PageBlogGridComponent } from './core/components/page-blog-grid/page-blog-grid.component';
import { PageBlogListSidebarComponent } from './core/components/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageBlogListComponent } from './core/components/page-blog-list/page-blog-list.component';
import { PageBlogSidebarComponent } from './core/components/page-blog-sidebar/page-blog-sidebar.component';
import { PageCaseDetailComponent } from './core/components/page-case-detail/page-case-detail.component';
import { PageCasesComponent } from './core/components/page-cases/page-cases.component';
import { PageComingsoonComponent } from './core/components/page-comingsoon/page-comingsoon.component';
import { PageComingsoon2Component } from './core/components/page-comingsoon2/page-comingsoon2.component';
import { PageContactDetailComponent } from './core/components/page-contact-detail/page-contact-detail.component';
import { PageContactOneComponent } from './core/components/page-contact-one/page-contact-one.component';
import { PageContactThreeComponent } from './core/components/page-contact-three/page-contact-three.component';
import { PageContactTwoComponent } from './core/components/page-contact-two/page-contact-two.component';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { PageThankyouComponent } from './core/components/page-thankyou/page-thankyou.component';
import { PageHistoryComponent } from './core/components/page-history/page-history.component';
import { PageInvoiceComponent } from './core/components/page-invoice/page-invoice.component';
import { PageJobApplyComponent } from './core/components/page-job-apply/page-job-apply.component';
import { PageJobCandidateComponent } from './core/components/page-job-candidate/page-job-candidate.component';
import { PageJobCompanyComponent } from './core/components/page-job-company/page-job-company.component';
import { PageJobDetailComponent } from './core/components/page-job-detail/page-job-detail.component';
import { PageJobsSidebarComponent } from './core/components/page-jobs-sidebar/page-jobs-sidebar.component';
import { PageJobsComponent } from './core/components/page-jobs/page-jobs.component';
import { PageJobCompanyListComponent } from './core/components/page-job-company-list/page-job-company-list.component';
import { PageJobCandidateListComponent } from './core/components/page-job-candidate-list/page-job-candidate-list.component';
import { PageMaintenanceComponent } from './core/components/page-maintenance/page-maintenance.component';
import { PagePricingComponent } from './core/components/page-pricing/page-pricing.component';
import { PagePrivacyComponent } from './core/components/page-privacy/page-privacy.component';
import { PageServicesComponent } from './core/components/page-services/page-services.component';
import { PageTeamComponent } from './core/components/page-team/page-team.component';
import { PageTermsComponent } from './core/components/page-terms/page-terms.component';
import { PageWorkClassicComponent } from './core/components/page-work-classic/page-work-classic.component';
import { PageWorkDetailComponent } from './core/components/page-work-detail/page-work-detail.component';
import { PageWorkGridComponent } from './core/components/page-work-grid/page-work-grid.component';
import { PageWorkMasonryComponent } from './core/components/page-work-masonry/page-work-masonry.component';
import { PageWorkModernComponent } from './core/components/page-work-modern/page-work-modern.component';
import { WidgetComponent } from './core/components/widget/widget.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';

import { combineLatest } from 'rxjs/internal/operators';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: 'de', component: IndexComponent },
      { path: 'forums', component: ForumsComponent },
      { path: 'forums-comments', component: ForumsCommentsComponent },
      { path: 'forums-topic', component: ForumsTopicComponent },
      { path: 'helpcenter-faqs', component: HelpcenterFaqsComponent },
      { path: 'helpcenter-guides', component: HelpcenterGuidesComponent },
      { path: 'helpcenter-overview', component: HelpcenterOverviewComponent },
      { path: 'helpcenter-support-request', component: HelpcenterSupportRequestComponent },
      { path: 'index', component: IndexComponent },
      { path: '', component: IndexJobComponent },
      { path: 'page-aboutus', component: PageAboutusComponent },
      { path: 'page-aboutus-two', component: PageAboutusTwoComponent },
      { path: 'page-blog-detail', component: PageBlogDetailComponent },
      { path: 'page-blog-grid', component: PageBlogGridComponent },
      { path: 'page-blog-list', component: PageBlogListComponent },
      { path: 'page-blog-list-sidebar', component: PageBlogListSidebarComponent },
      { path: 'page-blog-sidebar', component: PageBlogSidebarComponent },
      { path: 'page-case-detail', component: PageCaseDetailComponent },
      { path: 'page-cases', component: PageCasesComponent },
      { path: 'page-contact-detail', component: PageContactDetailComponent },
      { path: 'page-contact-one', component: PageContactOneComponent },
      { path: 'page-contact-three', component: PageContactThreeComponent },
      { path: 'page-contact-two', component: PageContactTwoComponent },
      { path: 'page-history', component: PageHistoryComponent },
      { path: 'page-invoice', component: PageInvoiceComponent },
      { path: 'page-job-apply', component: PageJobApplyComponent },
      { path: 'page-job-candidate', component: PageJobCandidateComponent },
      { path: 'page-job-company', component: PageJobCompanyComponent },
      { path: 'page-job-detail', component: PageJobDetailComponent },
      { path: 'page-jobs', component: PageJobsComponent },
      { path: 'page-job-company-list', component: PageJobCompanyListComponent },
      { path: 'page-job-candidate-list', component: PageJobCandidateListComponent },
      { path: 'page-jobs-sidebar', component: PageJobsSidebarComponent },
      { path: 'page-pricing', component: PagePricingComponent },
      { path: 'page-privacy', component: PagePrivacyComponent },
      { path: 'page-services', component: PageServicesComponent },
      { path: 'page-team', component: PageTeamComponent },
      { path: 'page-terms', component: PageTermsComponent },
      { path: 'page-work-classic', component: PageWorkClassicComponent },
      { path: 'page-work-detail', component: PageWorkDetailComponent },
      { path: 'page-work-grid', component: PageWorkGridComponent },
      { path: 'page-work-masonry', component: PageWorkMasonryComponent },
      { path: 'page-work-modern', component: PageWorkModernComponent },
      { path: 'widget', component: WidgetComponent },
      { path: '#', component: SwitcherComponent },
    ]
  },

  { path: 'index-onepage', component: IndexOnepageComponent },
  { path: 'page-comingsoon', component: PageComingsoonComponent },
  { path: 'page-comingsoon2', component: PageComingsoon2Component },
  { path: 'page-error', component: PageErrorComponent },
  { path: 'page-thankyou', component: PageThankyouComponent },
  { path: 'page-maintenance', component: PageMaintenanceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",
  scrollOffset: [0, 0],
  // Enable scrolling to anchors
  anchorScrolling: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
