## How to run the project

First, run the development server:

```bash
npm install
#then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## How long you spent

Start: 13:30:00

End: 17:30:00

## Detail

### What I completed

- **Profile Button Component**: Created a profile button with a dropdown menu that appears on click. Includes a chevron icon, submenu items for "Profile" (with bell icon) and "Settings" (with gear icon). Implemented outside click detection to hide the dropdown.

- **Universe Component**: Built a TrendingTags component displaying a list of trending hashtags with post counts. Integrated it into the Layout component and made it sticky for better scrolling experience.

- **Font Installation**: Attempted to install the "Budokan" font, but as it's not available on Google Fonts, installed the Buda font (a serif font) as an alternative and configured it in Tailwind CSS for use in the project.

- **Slideshow Feature**: Implemented a slideshow in the RightSidebar component using SwiperJS. Created multiple slides with autoplay, loop, and custom content for promotional features.

- **API Integration**:

  - Created API endpoints (`/api/tags` and `/api/posts`) to serve data dynamically.
  - Updated Universe component to fetch tags from the API.
  - Updated Feed component to fetch posts from the API.

- **Project Structure**: Maintained a clean component-based architecture with reusable UI components (Card, Button), feed components (Post, Feed), layout components (Layout, Sidebar), and widget components (RightSidebar, TrendingTags, Universe).

### What I skipped

- **Mobile responsive**
- **Post variation**
- **Search Recommendation**
- **Notification Sidebar**

### What I’d improve with more time

- **Code Splitting**: For optimize page load performance
- **Micro Interaction**: For more smooth user experience
