import axiosInstance from './../axios/AuthAxios';


const GRAPHQL = '/graphql';
const MOSTPOPULAR = '/rest/api/popular_articles';
const CONTACTUS = '/rest/api/contact_callback';

const NPApi = {
    getMenuItems: async function() {
        return await axiosInstance.post(`${ GRAPHQL }`, {
            query: `query {
          menuByName(name: "footer") {
            links {
              label
              url {
                path
              }
            }
          }
        }`,
        });
    },
    getCategoryMenuItems: async function() {
        const response = await axiosInstance.post(`${ GRAPHQL }`, {
            query: `query categoryListTerms($limit:Int!, $offset:Int!, $vid:String!){
        taxonomyTermQuery(limit: $limit, offset: $offset,
          filter: {conditions: [{operator: EQUAL, field: "vid", value: [$vid]}]})
        {
          entities {
            entityLabel
            entityId
            entityUrl{
              path
            }
            ... on TaxonomyTermCategory {
              fieldIcon
              fieldVisible
          }
          }
        }
      }`,
            variables: {
                limit: 20,
                offset: 0,
                vid: 'category',
            },
        });
        return response;
    },
    getNodeByUrl: async function(slug) {
        return await axiosInstance.post(`${ GRAPHQL }`, {
            query: `query getNodeByPath($path:String!){
        route(path:$path){
            ... on EntityCanonicalUrl {
            entity {
              entityBundle
              entityCreated
              entityUrl{
                path
              }
              ... on NodeArticle{
                created
                body {
                  value
                }
                title
                fieldNewsCategory{
                  entity{
                    ... termFragment
                  }
                }
                fieldSource{
                  title
                  url {
                    path
                  }
                }
                fieldNewsPortalLike{
                  likes
                }
                 fieldImage{
                title
                alt
                thumb:derivative(style:DETAILPAGE) {
                  url
                  width
                  height
                }
              }
              }
              ... on NodePage {
                created
                title
                body{
                  value
                }
              }
            }
          }
        }
      }

      fragment termFragment on TaxonomyTerm {
        name
        entityUrl {
          path
        }
      }`,
            variables: {
                path: slug,
            },
        });
    },
    getNodeById: async function(id) {
        return await axiosInstance.post(`${ GRAPHQL }`, {
            query: `
        query {
          nodeById(id: ${ id.toString() }) {
            entityLabel
            entityBundle
          }
        }
      `,
        });
    },
    getCategoryList: async function(categories) {
        //TODO::Remove conditional statement.
        if (!categories || !categories.length) {
            return [];
        }
        return await axiosInstance.post(`${ GRAPHQL }`, {
            query: `
      query getArticleByCategory($categories: [String]!, $limit:Int!, $offset:Int!){
        nodeQuery(limit: $limit, offset: $offset, filter: {
          conjunction: AND
          conditions: [
            {operator: EQUAL, field: "type", value: ["article"]},
            {field: "field_news_category", value: $categories, operator: IN}
        ]
        }
          sort: [{
          field: "created"
          direction: DESC
        }]
        )
        {
          entities {
            entityLabel
            entityUrl {
              path
            }
            entityCreated
             ... on NodeArticle {
              fieldNewsCategory {
                entity {
                  ...termFragment
                }
              }
              fieldImage{
                title
                alt
                thumb:derivative(style:TEASER_480X320) {
                  url
                  width
                  height
                }
              }
        }
          }
        }
      }

      fragment termFragment on TaxonomyTermCategory {
        name
        entityUrl{
          path
        }
      }`,
            variables: {
                limit: 20,
                offset: 0,
                categories: categories,
            },
        });
    },
    getMostPopular: async function() {
        return await axiosInstance.get(`${ MOSTPOPULAR }`);
    },
    getSearch: async function(param) {
        //TODO::Remove string concatenation.
        const payload = '%' + param + '%';

        return await axiosInstance.post(`${ GRAPHQL }`, {
            query: `
      query searchNewsArticles($query:String!, $limit:Int!, $offset:Int!){
        nodeQuery(limit: $limit, offset: $offset, filter: {
         conjunction: AND,
         groups: [
           {conjunction: OR, conditions: [{field: "title", value: [$query], operator: LIKE}, {field: "body", value: [$query], operator: LIKE}]},
           {conditions: [{operator: EQUAL, field: "type", value: ["article"]}]}
         ]}
         sort: [{
         field: "created"
         direction: DESC
       }]
       )
       {
         entities {
           entityLabel
           entityUrl {
             path
           }
           entityCreated
            ... on NodeArticle {
             created
             fieldNewsCategory {
               entity {
                 ...termFragment
               }
             }
             fieldImage{
               title
               alt
               thumb:derivative(style:TEASER_480X320) {
                 url
                 width
                 height
               }
             }
       }
         }
       }
     }

     fragment termFragment on TaxonomyTermCategory {
       name
       entityUrl {
         path
       }
     }`,
            variables: {
                query: payload,
                limit: 12,
                offset: 0,
            },
        });
    },
    sendContactUs: async function(data) {
        return await axiosInstance.post(`${ CONTACTUS }`, { data });
    },
};

export default NPApi;
