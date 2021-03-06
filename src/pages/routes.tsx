import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { NewRoom } from "./NewRoom";
import { NotFound } from "./NotFound";
import { Room } from "./Room";
import {AdminRoom} from "./AdminRoom"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/rooms/new" exact component={NewRoom} />
        <Route path="/rooms/:id" exact component={Room} />
        <Route path ="/admin/rooms/:id" component ={AdminRoom}/>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
