import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider  } from 'react-router'
import { HomePage } from './HomePage.tsx'
import { AboutPage } from './AboutPage.tsx'
import { ImprintPage } from './ImprintPage.tsx'
import { Frame } from './Frame.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const rootElement = document.getElementById('root')!
const reactRoot = createRoot(rootElement)

const router = createBrowserRouter([
    { path: "/", element: <Frame/>, children: [
        { path: "/", element: <HomePage/> },
        { path: "/about", element: <AboutPage/> },
        { path: "/imprint", element: <ImprintPage/> },
        { path: "*", element: <div>Fallback route</div> },
    ] },
])

const queryClient = new QueryClient();

reactRoot.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
)

