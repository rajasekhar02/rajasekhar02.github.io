import { authAxios } from "../config/axiosConfig";

const CONSTANTS = {
  USER_ID: import.meta.env.VITE_USER_ID
}
// authentication needed apis
const castToPayload = function (graphqlQuery, variables = {}) {
  return {
    query: graphqlQuery,
    variables
  };
};
const userQuery = `
query UserDetails($user_id:String!){
  user_details: user (id: $user_id){
    sys {
      id
    }
    firstName
    lastName
    profilePictureUrl {
      url
    },
    quotes {
        text,
        author
    }
    contactDetails {
        email,
        githubProfileLink,
        linkedInProfileLink,
        houseAddress,
        phoneNumber
    }
    professionalSummary{
      json
    }
    longIntro{
      json
    }
  }
}
`;

const contactQuery = `
query ContactDetails($user_id: String!){
    contact_details: contactCollection(where:{
    user:{
        sys:{
        id:$user_id
        }
    },
    }){
        items {
            email,
            githubProfileLink,
            linkedInProfileLink,
            houseAddress,
            phoneNumber
        }
    }
}
`;
const educationDetailsQuery = `
query EducationDetails($user_id: String!) {
  education_details: educationCollection(where: {user: {sys: {id: $user_id}}},order: [startDate_DESC]) {
    items {
      universityName
      universityLink
      isCurrent
      startDate
      endDate
      educationSlug
      imageUrl{
        url
      }
      coursesEnrolledCollection{
        items {
        	title,
          courseDescription{
            json
          }
      	}
      }
      specialization
    }
  }
}
`;
const professionalExperiencesQuery = `
query ExperienceDetails($user_id: String!) {
  experience_details: professionalExperienceCollection(where: {user: {sys: {id: $user_id}}}, order: [startDate_DESC]) {
    items {
      companyName,
      companyLink,
      role,
      technologiesUsed,
      isCurrent
      startDate
      endDate
      experienceSlug
      imageUrl{
        url
      }
      jobDescription {
        json
      }
    }
  }
}
`;

const personalProjectsQuery = `
query PersonalProjects($user_id: String!) {
  personal_projects: personalProjectCollection(where:{user:{sys:{id: $user_id}}}, limit:10, order: [endDate_DESC]){
    items{
      name,
      description,
      technologies,
      startDate,
      endDate,
      githubUrl,
      liveDemoLink
    }
  }
}
`;

export const getUserDetails = async function () {
  const response = await authAxios.post(
    "",
    castToPayload(userQuery, { user_id: CONSTANTS.USER_ID })
  );
  return response.data.data.user_details;
};
export const getEducationDetails = async function () {
  const response = await authAxios.post(
    "",
    castToPayload(educationDetailsQuery, { user_id: CONSTANTS.USER_ID })
  );
  return response.data.data.education_details.items.map(x => {
    x.detailType = 'EDU'
    return x
  });
};
export const getExperienceDetails = async function () {
  const response = await authAxios.post(
    "",
    castToPayload(professionalExperiencesQuery, { user_id: CONSTANTS.USER_ID })
  );
  return response.data.data.experience_details.items.map(x => {
    x.detailType = 'WORK'
    return x
  });
};

export const getPersonalProjects = async function () {
  const response = await authAxios.post(
    "",
    castToPayload(personalProjectsQuery, { user_id: CONSTANTS.USER_ID })
  );
  console.log(response)
  return response.data.data.personal_projects.items;
};
export default {
  getUserDetails,
  getEducationDetails,
  getPersonalProjects
};
