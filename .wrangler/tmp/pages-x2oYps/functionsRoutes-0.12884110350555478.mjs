import { onRequestOptions as __api_contact_ts_onRequestOptions } from "C:\\Users\\Sebastian\\Desktop\\InventAgency\\inventagency-web\\functions\\api\\contact.ts"
import { onRequestPost as __api_contact_ts_onRequestPost } from "C:\\Users\\Sebastian\\Desktop\\InventAgency\\inventagency-web\\functions\\api\\contact.ts"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_contact_ts_onRequestOptions],
    },
  {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_contact_ts_onRequestPost],
    },
  ]