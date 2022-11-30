import Login from "../views/Login";
import PageNotFound from "../views/PageNotFound";
import Home from "../views/home/Home";
import HomeIcon from "../modules/common/components/Icons/HomeIcon";
import TransactionIcon from "../modules/common/components/Icons/TransactionIcon";
import TransactionGrid from "../views/transaction/TransactionGrid";
import TransactionEdit from "../views/transaction/TransactionEdit";
import TransactionNew from "../views/transaction/TransactionNew";

export interface RouteInfo {
  path: string;
  name: string;
  component: any;
  icon?: any;
  layout: string;
  signed: boolean;
  menuNav: boolean;
}

const Routes: RouteInfo[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth",
    signed: false,
    menuNav: false,
  },
  {
    path: "/notfound404",
    name: "PageNotFound",
    component: PageNotFound,
    layout: "/auth",
    signed: false,
    menuNav: false,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    icon: HomeIcon,
    layout: "/main",
    signed: true,
    menuNav: true,
  },
  {
    path: "/transaction",
    name: "Transações",
    component: TransactionGrid,
    icon: TransactionIcon,
    layout: "/main",
    signed: true,
    menuNav: true,
  },
  {
    path: "/transaction/new",
    name: "Adicionar Transação",
    component: TransactionNew,
    icon: TransactionIcon,
    layout: "/main",
    signed: true,
    menuNav: false,
  },
  {
    path: "/transaction/edit/:id",
    name: "Editar Transação",
    component: TransactionEdit,
    icon: TransactionIcon,
    layout: "/main",
    signed: true,
    menuNav: false,
  },
];

export default Routes;
