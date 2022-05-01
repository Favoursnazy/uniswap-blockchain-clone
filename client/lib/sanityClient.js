import sanityClient from "@sanity/client"


export const client = sanityClient({
    projectId : "xhtu5ty4",
    dataset: "production",
    apiVersion: "v1",
    token: "skX8qpsPrZhvnhTr9PKeT0DxixFAW1R2nMSo50Mo06MM45PTKYKpFkNFcrU7j8hfCjyWJ5wftewaJxOUVmVDT29z0WCXK3UK1LN4ZTLnEC2l20RJ6eGURJQK2JX66ZtZsIMnMFIHqrMLHkW6YsZy2CrZMxp9iznC7HQRx15jixgjcy08rhY2",
    useCdn: false
})