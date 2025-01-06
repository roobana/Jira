const columns = [
    {
      title: "To Do",
      issues: [
        {
            id:"J-1",
            title: "Fix Bug #123",
            description: "The login button is not responsive on mobile devices.",
            label: [
                "Bug",
                "High Priority"
            ],
            due: "2025-01-15",
            status: "todo",
            assignee: "Roobana"
        },
        {
            id:"J-2",
            title: "Add Feature X",
            description: "Implement the new reporting dashboard feature for analytics.",
            label: [
                "Feature",
                "Medium Priority"
            ],
            due: "2025-01-22",
            status: "todo",
            assignee: "Roobana"

        }
      ] 
    },
    {
      title: "In Progress",
      issues: [
        {
            id:"J-3",
            title: "Fix Bug #123",
            description: "The login button is not responsive on web.",
            label: [
                "Bug",
                "High Priority"
            ],
            status: "inprogress",
            due: "2025-01-15",
            assignee: "Roobana"

        },
        {
            id:"J-4",
            title: "Add Feature X",
            description: "Implement the new button for the  analytics.",
            label: [
                "Feature",
                "Medium Priority"
            ],
            status: "inprogress",
            due: "2025-02-22",
            assignee: "Roobana"

        }
      ] 
    },
    {
      title: "Done",
      issues: [
        {
            id:"J-5",
            title: "Fix Bug #124",
            description: "The login button is not responsive on Web.",
            label: [
                "Bug",
                "High Priority"
            ],
            status: "done",
            due: "2025-03-15",
            assignee: "Roobana"

        },
        {
            id:"J-6",
            title: "Add Feature X",
            description: "Implement the new reporting dashboard feature for analytics.",
            label: [
                "Feature",
                "Medium Priority"
            ],
            status: "done",
            due: "2025-04-22",
            assignee: "Roobana"

        }
      ] 
    },
  ]


  export default columns