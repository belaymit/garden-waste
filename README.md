<a name="readme-top"></a>

<div align="center">

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- 
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Garden Waste Skip Hire <a name="about-project"></a>

**Garden Waste Skip Hire** is a React-based web application that helps users find and book appropriate skips for garden waste disposal in their area. The application displays available skips categorized by size with detailed pricing and specifications.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li><a href="https://ant.design/">Ant Design</a></li>
    <li><a href="https://react-icons.github.io/react-icons/">React Icons</a></li>
  </ul>

</details>
<!-- Features -->

### Key Features <a name="key-features"></a>

- **Dual View Modes**: Toggle between card and table views
- **Unified Selection System**: Select items in either view with consistent state management
- **Type-Safe Architecture**: Comprehensive TypeScript definitions
- **Custom Theme**: Theme configuration with styled-components
- **Efficient Data Fetching**: Custom hook for API data management
- **Responsive Design**: Works across all device sizes

### Implementation Approach <a name="implementation-approach"></a>

1. **Type Definitions**:
   - Created comprehensive type definitions in `src/types/listTypes.ts`
   - Includes interfaces for Skip, SkipCardProps, SkipTableProps, etc.

2. **View Components**:
   - `SkipCards.tsx`: Card view component with visual selection
   - `SkipTable.tsx`: Table view component with row selection capability
   - Shared selection state between both views

3. **State Management**:
   - Context API for global selection state
   - Custom `useFetchSkips` hook for data fetching and caching
   - Selection state persists when switching between views

4. **Theme Configuration**:
   - Theme variables in `src/utils/theme.ts`
   - Responsive breakpoints and color palette
   - Consistent styling across both views

5. **Assets Management**:
   - Organized assets in `src/assets/`
   - Optimized skip images
   - SVG icons for UI elements


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Add a link to your deployed project.

- [Live Demo Link](https://marvelous-figolla-f0c6b2.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn


### Setup


```sh
  cd my-folder
  git@github.com:username/garden-waste.git

```

### Install

```sh
  cd garden-waste
  npm install
  # or
  yarn install
```

### Usage


```sh
  npm run dev
  # or
  yarn dev
```

### Deployment

```sh
  npm run build
  # Then deploy the build folder to your preferred hosting service
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Belay B. Gibina**

- GitHub: [@githubhandle](https://github.com/belaymit)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/belay-bgwa/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- Advanced Filtering: Add filters for skip size, price range, and availability

- Booking System: Implement a complete booking flow

- User Accounts: Add authentication and booking history
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/belaymit/garden-waste/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, please considering give it a star ⭐️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank the project owners

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
