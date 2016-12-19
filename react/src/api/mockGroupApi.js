import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const groups = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    authorId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
    authorId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    authorId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    authorId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    authorId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (group) => {
  return replaceAll(group.title, ' ', '-');
};

class GroupApi {
  static getAllGroups() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], groups));
      }, delay);
    });
  }

  static saveGroups(group) {
    group = Object.assign({}, group); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (group.id) {
          const existingGroupIndex = groups.findIndex(a => a.id == group.id);
          groups.splice(existingGroupIndex, 1, group);
        } else {
          group.id = generateId(group);
          group.watchHref = `http://www.aristole.com/groups/${group.id}`;
          groups.push(group);
        }

        resolve(group);
      }, delay);
    });
  }

  static deleteGroup(groupId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfGroupToDelete = groups.findIndex(group => {
          group.id == groupId;
        });

        groups.splice(indexOfGroupToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default GroupApi;
