import { HomePage } from '../page-models/home';

fixture`Homepage`.page`http://localhost:8080`;

test('Homepage renders a Sidebar and a Content Area', (t) =>
  t
    .expect(HomePage.mainContent.exists)
    .ok()
    .expect(HomePage.sidebar.exists)
    .ok()
    .expect(HomePage.mainContent.textContent)
    .eql('Main')
    .expect(HomePage.sidebar.textContent)
    .eql('Sidebar'));
