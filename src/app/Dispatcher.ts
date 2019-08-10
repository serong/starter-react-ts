import { Dispatcher } from "flux";
import {IAction} from "./_actions/Action";

const dispatcher = new Dispatcher<IAction>();

export default dispatcher;
