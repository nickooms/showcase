import querystring from 'querystring';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

const STORYBOOK_URL = 'http://localhost:9009/iframe.html';

expect.extend({ toMatchImageSnapshot });

configure({ adapter: new Adapter() });

const story = (selectedKind, selectedStory) =>
  `${STORYBOOK_URL}?${querystring.stringify({ selectedKind, selectedStory })}`;

export const stories = async (component, names) =>
  describe(component, () => {
    names.map(name =>
      it(name, async () => {
        await page.goto(story(component, name));
        expect(await page.screenshot()).toMatchImageSnapshot();
      })
    );
  });

export default story;
