# react-link-preview Component Specification
React Dynamic Plug &amp; Play Link Preview Component

Welcome to react-link-preview repository.

The work will be reviewed using the demo in this repo. Source code is expected to be clean and easy to follow. Feel free to submit edits to the component documentation in  [Documentation.md](https://github.com/housesports/react-link-preview/blob/main/DOCUMENTATION.md). The new component should be placed in its own folder. After the component is tested thoroughly and finished, the new component will be made into a npm package and this repo will serve as demo source code.

We will use this the repository [issues](https://github.com/housesports/react-link-preview/issues/new) for discussions, questions, or concerns. Submit a pull request for code review and merge. The demo will be updated with the latest editions. The demo contains the necessary CRUD options for entering testing urls. 

**User story:**
I would like for links that I share or post to show up in my feed with the associated media displaying. In previewing all that’s available from the links, I would like to see a title and brief description, the hero images, and a video player to view any videos. I mostly post or share news articles or content from social media. 

**Details:**
The component will show within the app with adequate optimization and efficiency.

The component will accept the following props: 
- key id
- a url

See [Documentation](https://github.com/housesports/react-link-preview/blob/main/DOCUMENTATION.md). 

Tapping the title will launch the link. For web app into a separate window and for mobile app into an in-app browser.

Images displayed will be enlarged upon tap. 

Videos displayed shall be interactive allowing play, pause, seek, and expand within a video player. 

Available audio files shall display with a player interactively allowing play, pause, and seek. 

The component shall accommodate all links. Error cases shall display error and reason for error. The following link origins are significant:
- instagram
- espn
- facebook
- youtube
- google search result


**Deliverables:**
A demo of successfully running components with several link previews displaying within a list that uses a fetched array for data source. Source code of each component.
Project will be considered complete when in-house runs each component successfully. 

**Sample work:**
Link previews of articles displayed within Facebook feeds.
