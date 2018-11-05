// Pages
import MessagingPage from './../containers/Pages/MessagingPage';
import HomePage from './../containers/Pages/HomePage';
import ReceivePage from './../containers/Pages/ReceivePage';
import TransactionPage from './../containers/Pages/TransactionPage';
import SendPage from './../containers/Pages/SendPage';
import SettingsPage from './../containers/Pages/SettingsPage';
import ContactsPage from './../containers/Pages/ContactsPage';
import NetworkStatsPage from './../containers/Pages/NetworkStatsPage';
import NewsPage from './../containers/Pages/NewsPage';
import FileStoragePage from './../containers/Pages/FileStoragePage';

// Layouts
import MainLayout from './../Layouts/Main';
import SettingsLayout from './../Layouts/Settings';
import SetupLayout from './../Layouts/Setup';
import LoadingLayout from './../Layouts/Loading';

export default [
  {
    component: SettingsLayout,
    path: '/settings',
    routes: [
      {
        path: '/settings',
        component: SettingsPage
      }
    ]
  },
  {
    component: SetupLayout,
    path: '/setup'
  },
  {
    component: LoadingLayout,
    path: '/loading'
  },
  {
    component: MainLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomePage
      },
      {
        path: '/send',
        component: SendPage
      },
      {
        path: '/addresses',
        component: ReceivePage
      },
      {
        path: '/transactions',
        component: TransactionPage
      },
      {
        path: '/news',
        component: NewsPage
      },
      {
        path: '/network',
        component: NetworkStatsPage
      },
      {
        path: '/contacts',
        component: ContactsPage
      },
      {
        path: '/messages',
        component: MessagingPage
      },
      {
        path: '/files',
        component: FileStoragePage
      }
    ]
  }
];
