import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import LayoutPage from '../pages/layout';
import LoginPage from '../pages/login';


const RouterBanner = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner'));
const RouterBannerEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner/edit.banner'));
const RouterBannerAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/bannner/add.banner'));

const RouterDashboard = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/dashboard'));


const RouterCustomer = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/customer'));
const RouterCustomerEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/customer/edit.customer'));
const RouterCustomerAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/customer/add.customer'));
const RouterCustomerInfo = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/customer/detail.customer'));

const RouterAdult = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/adult'));
const RouterAdultEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/adult/edit.adult'));
const RouterAdultAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/adult/add.adult'));

const RouterMature = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/mature'));

const RouterChild = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/child'));
const RouterChildAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/child/add.child'));
const RouterChildEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/child/edit.child'));


const RouterPartner = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner'));
const RouterPartnerAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/add.partner'));
const RouterPartnerEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/partner/edit.partner'));

const RouterAgent = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/agent'));
const RouterAgentAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/agent/add.agent'));
const RouterAgentEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/agent/edit.agent'));

const RouterProduct = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/product'));
const RouterProductAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/product/add.product'));
const RouterProductEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/product/edit.product'));

const RouterCourse = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/course'));
const RouterCourseAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/course/add.course'));
const RouterCourseEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/course/edit.course'));

const RouterAdultForm = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/form/adult.form'));
const RouterChildForm = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/form/child.form'));
const RouterMatureForm = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/form/mature.form'));

const RouterDoc = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/doc'));
const RouterDocAdd = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/doc/add.doc'));
const RouterDocEdit = lazy(() => import(/* webpackChunkName: "route-permission"*/ '../pages/doc/edit.doc'));






const routeList: RouteObject[] = [
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <LayoutPage />,
        children: [
            {
                path: '/',
                element: <RouterDashboard />,
            },
            {
                path: 'customer',
                element: <RouterCustomer />,
            },
            {
                path: 'customer/add',
                element: <RouterCustomerAdd />,
            },
            {
                path: 'customer/edit',
                element: <RouterCustomerEdit />,
            },
            {
                path: 'customer/info',
                element: <RouterCustomerInfo />,
            },
            {
                path: 'nose-femur',
                element: <RouterChild />,
            },
            {
                path: 'nose-femur/add',
                element: <RouterChildAdd />,
            },
            {
                path: 'nose-femur/edit',
                element: <RouterChildEdit />,
            },
            {
                path: 'adult',
                element: <RouterAdult />,
            },
            {
                path: 'adult/add',
                element: <RouterAdultAdd />,
            },
            {
                path: 'adult/edit',
                element: <RouterAdultEdit />,
            },
            {
                path: 'partner',
                element: <RouterPartner />,
            },
            {
                path: 'partner/add',
                element: <RouterPartnerAdd />,
            },
            {
                path: 'partner/edit',
                element: <RouterPartnerEdit />,
            },
            {
                path: 'agent',
                element: <RouterAgent />,
            },
            {
                path: 'agent/add',
                element: <RouterAgentAdd />,
            },
            {
                path: 'agent/edit',
                element: <RouterAgentEdit />,
            },
            {
                path: 'product',
                element: <RouterProduct />,
            },
            {
                path: 'product/add',
                element: <RouterProductAdd />,
            },
            {
                path: 'product/edit',
                element: <RouterProductEdit />,
            },
            {
                path: 'course',
                element: <RouterCourse />,
            },
            {
                path: 'course/add',
                element: <RouterCourseAdd />,
            },
            {
                path: 'course/edit',
                element: <RouterCourseEdit />,
            },
            {
                path: 'mature',
                element: <RouterMature />,
            },
            {
                path: 'form/adult',
                element: <RouterAdultForm />,
            },
            {
                path: 'form/child',
                element: <RouterChildForm />,
            },
            {
                path: 'form/mature',
                element: <RouterMatureForm />,
            },
            {
                path: 'doc',
                element: <RouterDoc />,
            },
            {
                path: 'doc/add',
                element: <RouterDocAdd />,
            },
            {
                path: 'doc/edit',
                element: <RouterDocEdit />,
            },
        ]
    },
];


const RenderRouter: FC = () => {
    const element = useRoutes(routeList);

    return element;
};

export default RenderRouter;

