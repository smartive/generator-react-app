import { Selector } from 'testcafe';

export class HomePage {
  public static readonly mainContent: Selector = Selector('main p');
  public static readonly sidebar: Selector = Selector('aside');

  private constructor() {}
}
