require("dotenv").config();
import "module-alias/register";

import { initializeApplication } from "./application";
import { printEnv } from "lib";

printEnv();
initializeApplication();
