/**
 * content.js — NFR Team Training Portal
 * Training content for Maria (Mozaik), Scott (CNC), Jorge (Field).
 */

(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // MOZAIK PLAN — Maria (Weeks 8–12)
  // ═══════════════════════════════════════════════════════════════════════════

  const MOZAIK_URL   = 'https://sites.google.com/view/mozaikonlinehelp/training-videos';
  const MOZAIK_LABEL = 'Mozaik Training Library';

  const MOZAIK_PLAN = {
    8: [
      // Mon
      {
        topic: 'Custom Width Modifications',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Change a standard cabinet to a custom width',
          'Apply width changes to multiple cabinets in sequence',
          'Verify the fit in the 3D layout view',
        ],
        task: 'Open a kitchen project, change one 24" base cabinet to 27", verify the change in 3D view, and save as [Project]-W8D1.',
        tip: 'Always view in 3D after any width change.',
      },
      // Tue
      {
        topic: 'Height & Depth Customization',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Adjust cabinet height for non-standard ceiling situations',
          'Modify depth for appliance clearance requirements',
          'Stack multiple modifications on a single cabinet',
        ],
        task: 'Change a base cabinet to 32" height, set a wall cabinet to reduced depth 11", and save as [Project]-W8D2.',
        tip: 'Height changes affect countertop alignment — always check after.',
      },
      // Wed
      {
        topic: 'Specialty Configurations — Fillers, Angles & Transitions',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Add filler panels to close gaps at walls',
          'Create corner transitions between two cabinet runs',
          'Use specialty cabinet types in a layout',
        ],
        task: 'Build an L-shape layout, add fillers on wall ends, add a corner base cabinet, verify no gaps in 3D, and save as [Project]-W8D3.',
        tip: 'Filler panels must match cabinet finish.',
      },
      // Thu
      {
        topic: 'Combining Modifications on Full Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply multiple modifications across a full kitchen layout',
          'Check for conflicts between stacked modifications',
          'Regenerate the cut list after all changes are made',
        ],
        task: 'Build a 10×12 kitchen with at least 3 modification types, generate the cut list, and save as [Project]-W8D4.',
        tip: 'Always regenerate cut list after modifications.',
      },
      // Fri
      {
        topic: 'Week 8 Review — Practice Kitchen',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Complete a full kitchen using all Week 8 skills without reference',
          'Include custom width, non-standard height, and fillers',
          'Generate a 3D view and cut list as deliverables',
        ],
        task: 'Build a complete kitchen from Jose\'s brief, apply all Week 8 modifications, generate 3D and cut list — this is your Friday 1pm check-in deliverable.',
        tip: 'Friday check-in: show 3D view, walk through modifications, explain one decision.',
      },
    ],

    9: [
      // Mon
      {
        topic: 'L-Shape Kitchen Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete L-shape kitchen layout',
          'Place the corner base cabinet correctly at the turn',
          'Fill outward from the corner on both runs',
        ],
        task: 'Build a 10×10 L-shape kitchen with corner base cabinet at the turn and wall cabinets above both runs. Export 3D view.',
        tip: 'Place corner cabinet first, fill outward.',
      },
      // Tue
      {
        topic: 'Island & Peninsula Design',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Add a kitchen island with correct aisle clearance',
          'Apply a contrasting finish to the island',
          'Verify minimum 42" clearance on all sides',
        ],
        task: 'Add a 36×60 island to the W9D1 layout with 42" clearance maintained. Apply a contrasting finish to the island.',
        tip: 'Island aisle clearance is a code minimum — do not go below 42".',
      },
      // Wed
      {
        topic: 'Awkward Spaces — Soffits and Bulkheads',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Model a soffit above a wall cabinet run',
          'Handle a wall with a 2" offset correctly',
          'Verify everything looks correct in 3D',
        ],
        task: 'Build a kitchen with a soffit above the wall cabinet run and one wall with a 2" offset. Verify in 3D.',
        tip: 'Measure from both ends of each wall.',
      },
      // Thu
      {
        topic: 'U-Shape & Galley Layouts',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete U-shape kitchen layout',
          'Build a complete galley layout with correct clearance',
          'Understand minimum walkway requirements for each layout type',
        ],
        task: 'Build both — a U-shape in an 8×10 room and a galley in an 8×14 room with 48" clearance between runs.',
        tip: 'Galley needs 48" minimum between runs.',
      },
      // Fri
      {
        topic: 'Week 9 Review — Full Layout Challenge',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a complete kitchen layout from Jose\'s assigned room size and type',
          'Apply Week 8 modifications within the layout',
          'Generate 3D and cut list, present to Jose at 1pm',
        ],
        task: 'Jose assigns room size and layout type. Build the complete kitchen, apply Week 8 modifications, generate 3D and cut list, and present at 1pm.',
        tip: 'Show Jose the layout, explain why you chose each cabinet type.',
      },
    ],

    10: [
      // Mon
      {
        topic: '3D View Navigation & Camera Angles',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Navigate the 3D view confidently from any angle',
          'Save named camera views for a project',
          'Export camera views as images',
        ],
        task: 'Open a completed kitchen. Save 3 camera views: overall, island detail, and corner. Export each as an image.',
        tip: 'Best client angle is from the kitchen entry at eye height.',
      },
      // Tue
      {
        topic: 'Material & Color Application in 3D',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply finishes and colors in the 3D view',
          'Create two distinct finish versions of the same kitchen',
          'Export both versions for client comparison',
        ],
        task: 'Create Version A (white perimeter, navy island) and Version B (greige perimeter, white island). Export both.',
        tip: 'Always show two options side-by-side — clients decide faster with a comparison.',
      },
      // Wed
      {
        topic: 'Lighting & Rendering Quality',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Adjust lighting settings in an existing 3D view',
          'Export a render at the highest quality setting',
          'Compare before and after lighting adjustment',
        ],
        task: 'Adjust lighting on an existing 3D view, export at highest quality, compare before and after. Save both.',
        tip: 'Good lighting does more for client confidence than cabinet details.',
      },
      // Thu
      {
        topic: 'Creating Client Presentation Exports',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Assemble a complete client presentation export package',
          'Follow the NFR file naming convention',
          'Ensure the package contains all 4 required items',
        ],
        task: 'Export a full package: 2 camera views, floor plan, and cut list. Name each file: [ClientLastName]-[Date]-[Version].',
        tip: 'Every package needs the same 4 items every time.',
      },
      // Fri
      {
        topic: 'Week 10 Review — Full Presentation Walkthrough',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a kitchen to Jose\'s brief and prepare a full presentation package',
          'Walk Jose through the design as if he were the client',
          'Demonstrate camera angles, color options, and the cut list',
        ],
        task: 'Jose plays the client. Build the kitchen to his brief, prepare the full package, and walk him through it at 1pm.',
        tip: 'This is your chance to practice being a designer, not just a software operator.',
      },
    ],

    11: [
      // Mon
      {
        topic: 'Understanding Cut List Output',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a cut list from a completed kitchen project',
          'Identify every part on the list by name and purpose',
          'Circle or flag any entry that looks incorrect',
        ],
        task: 'Generate a cut list from a completed kitchen. Go line by line, identify every part, circle anything that looks wrong.',
        tip: 'The cut list is what Scott and the CNC work from. Read it like you\'re the one making the cut.',
      },
      // Tue
      {
        topic: 'Part Labeling & Sheet Optimization',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Review the sheet layout and nesting output',
          'Calculate waste percentage from the nesting layout',
          'Identify the largest and smallest cut on the sheet',
        ],
        task: 'Review a Mozaik sheet layout and nesting output. Note the waste percentage. Identify the largest and smallest cut.',
        tip: 'If waste is above 20%, flag to Jose before approving.',
      },
      // Wed
      {
        topic: 'Material Quantity Reports',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a full material quantity report',
          'List total sheet count, door count, drawer count, and hardware',
          'Compare the quantity report to the cut list for accuracy',
        ],
        task: 'Generate a full material quantity report. List total sheets, door count, drawer count, and hinges. Compare to the cut list.',
        tip: 'This becomes your purchase order — it must be accurate.',
      },
      // Thu
      {
        topic: 'CNC Output Files & Job Setup',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Export CNC-ready files from Mozaik',
          'Apply the NFR file naming convention',
          'Organize exported files in a labeled folder',
        ],
        task: 'Export CNC-ready files. Name each: [Client]-[Date]-[PartType]. Place in a correctly labeled folder.',
        tip: 'File naming is not optional — Scott needs to know which files go with which job.',
      },
      // Fri
      {
        topic: 'Week 11 Review — Full Manufacturing Package',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate a complete production package for a real job',
          'Hand the package off to Scott with everything labeled',
          'Present the package to Jose at 1pm',
        ],
        task: 'Generate the complete production package: cut list, material report, CNC files, labeled folder. Hand to Scott. Present to Jose at 1pm.',
        tip: 'This is the full circle — design to production.',
      },
    ],

    12: [
      // Mon
      {
        topic: 'Project Planning from Client Brief',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Read and interpret a client brief before opening Mozaik',
          'Write out room dimensions and design constraints',
          'Prepare 3 clarifying questions for the client',
        ],
        task: 'Jose gives a client brief. Before opening Mozaik: write the room dimensions, constraints, and 3 questions for the client. Then set up the room in Mozaik.',
        tip: 'The best design starts before you open the software.',
      },
      // Tue
      {
        topic: 'Layout & Cabinet Selection',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Build a full cabinet layout from the client brief',
          'Select appropriate cabinet types for each position',
          'Apply Week 8 modifications where required',
        ],
        task: 'Build the full cabinet layout from the brief. Select appropriate cabinet types. Apply Week 8 modifications. Layout only — no finishes yet.',
        tip: 'Get the layout perfect before touching color.',
      },
      // Wed
      {
        topic: 'Finish, Modifications & Final Design',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Apply client-selected finishes to the layout',
          'Create two distinct color option versions',
          'Make final adjustments and review in 3D',
        ],
        task: 'Apply finishes, create two color options, make final adjustments, and view in 3D. End with the 3D view open.',
        tip: 'Always end with 3D view open — if it doesn\'t look right there, it won\'t look right in person.',
      },
      // Thu
      {
        topic: '3D Renders, Presentation & Cut List',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Generate renders for both color option versions',
          'Export floor plan and cut list',
          'Assemble everything in a labeled package folder',
        ],
        task: 'Generate the complete package: renders for both options, floor plan, cut list, material report, labeled folder.',
        tip: 'Package should be clean enough Jose could send it to the client without reviewing.',
      },
      // Fri
      {
        topic: 'Week 12 Final — Complete Project Presentation',
        resourceLabel: MOZAIK_LABEL,
        resourceUrl: MOZAIK_URL,
        objectives: [
          'Present the full project to Jose at 1pm',
          'Walk through every design decision',
          'Write a self-assessment: 3 things learned, 1 to improve',
        ],
        task: 'Present the full project to Jose at 1pm. Walk through every decision. After: write 3 things learned this week and 1 to improve.',
        tip: 'Week 12 is not the end — it\'s the baseline.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CNC PLAN — Scott (Weeks 1–12)
  // ═══════════════════════════════════════════════════════════════════════════

  const CNC_URL   = 'https://www.shopsabre.com/shopsabre-university/';
  const CNC_LABEL = 'ShopSabre University';

  const CNC_PLAN = {
    1: [
      {
        topic: 'Machine Overview — Parts, Axes & Work Envelope',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify all axes on the physical machine',
          'Understand the machine\'s work envelope dimensions',
          'Learn the control panel layout and key functions',
        ],
        task: 'Watch the introduction video. Walk to the machine and identify each axis by name. Label them on a hand-drawn diagram.',
        tip: 'You must know where each axis moves before you touch a control.',
      },
      {
        topic: 'Safety — Emergency Stop, Pinch Points & PPE',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Locate every safety feature on the machine',
          'Know the emergency stop procedure by memory',
          'Identify all pinch points on the machine perimeter',
        ],
        task: 'Watch the safety video. Walk the machine perimeter and identify every safety feature. Write them all down.',
        tip: 'Know where the e-stop is before you ever start the machine.',
      },
      {
        topic: 'Practice — Safety Walk',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Walk the machine safety route from memory',
          'Recite the emergency stop procedure without prompting',
          'Demonstrate all safety knowledge to Jose',
        ],
        task: 'No video today — full practice. Walk the machine safety route 3 times from memory. Recite the emergency procedure to Jose.',
        tip: 'If you can\'t do it from memory today, you\'re not ready for Thursday.',
      },
      {
        topic: 'Power On/Off Sequence & Homing',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Execute the startup sequence in the correct order',
          'Home all axes correctly',
          'Understand why homing matters for every job',
        ],
        task: 'Watch the startup video. With Jose present, power on and home the machine. Do it 3 times.',
        tip: 'Skipping homing causes crashes. Always home first.',
      },
      {
        topic: 'Week 1 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Recall the 3 most important safety rules without reference',
          'Explain what happens if homing is skipped',
          'Draw the machine axes from memory',
        ],
        task: 'Write in the training log: (1) What are the 3 most important safety rules? (2) What happens if you skip homing? (3) Draw the machine axes from memory.',
        tip: 'You cannot move forward without knowing this section cold.',
      },
    ],

    2: [
      {
        topic: 'Software Overview — Toolbars, Workspace & File Types',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify every toolbar and menu in the CNC software',
          'Understand the file type the machine uses for jobs',
          'Navigate the workspace without assistance',
        ],
        task: 'Watch the software interface video. Open the software and identify every toolbar. List what each toolbar does.',
        tip: 'Learn the software before you touch the machine.',
      },
      {
        topic: 'Loading and Opening a Job File',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Locate a job file on the shop computer',
          'Load the file into the CNC software correctly',
          'Verify the file loaded without errors',
        ],
        task: 'Watch the opening files video. Load 3 different sample files provided by Jose.',
        tip: 'Always double-check the file name matches the job before loading.',
      },
      {
        topic: 'Practice — File Loading',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load 5 different files independently',
          'Identify the job and what it will cut for each file',
          'Confirm correct loading without assistance',
        ],
        task: 'Open 5 different files. For each, state what job it is and what it will cut. No cuts — software only.',
        tip: 'Speed in file loading prevents mistakes under pressure.',
      },
      {
        topic: 'Toolpath Preview',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run the toolpath simulation for a loaded file',
          'Identify each cut pass in the simulation',
          'Spot potential errors before any cutting begins',
        ],
        task: 'Watch the toolpath simulation video. Preview the sample file and describe each cut pass out loud.',
        tip: 'If the preview looks wrong, it IS wrong. Stop and call Jose.',
      },
      {
        topic: 'Week 2 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the file format the machine uses',
          'Explain what toolpath preview reveals before cutting',
          'Know when to stop and call Jose',
        ],
        task: 'Write: What file format does the machine use? What does toolpath preview tell you? What would make you stop and call Jose?',
        tip: 'These are the three most important questions in software operation.',
      },
    ],

    3: [
      {
        topic: 'Spoilboard — Purpose & Maintenance',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand the spoilboard\'s purpose in the cutting process',
          'Identify when the spoilboard needs replacement',
          'Know the maintenance procedure',
        ],
        task: 'Watch the spoilboard video. Inspect the actual spoilboard and write its current condition in the training log.',
        tip: 'A damaged spoilboard causes cut-through problems.',
      },
      {
        topic: 'Hold-Down Methods — Clamps, Vacuum & Screws',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up each hold-down type correctly',
          'Know which method to use for each material type',
          'Secure a panel correctly before cutting',
        ],
        task: 'Watch the hold-down video. Set up a scrap panel using the method Jose specifies.',
        tip: 'A panel that shifts mid-cut ruins the part and can break a bit.',
      },
      {
        topic: 'Practice — Hold-Down',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up panels using three different hold-down methods',
          'Have Jose inspect each setup before moving on',
          'Know the correct method for every material type we use',
        ],
        task: 'Set up 3 different scrap panels using 3 different hold-down methods. Jose inspects each.',
        tip: 'Consistent hold-down setup is what separates good cuts from bad ones.',
      },
      {
        topic: 'Setting Material Zero — X, Y, Z',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set X and Y zero to the material corner correctly',
          'Set Z zero to the material surface',
          'Understand the consequence of incorrect zero',
        ],
        task: 'Watch the zero-setting video. Practice setting Z-zero on a scrap panel with Jose present.',
        tip: 'Wrong Z-zero = cutting into the spoilboard or not cutting through.',
      },
      {
        topic: 'Week 3 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain why Z-zero matters',
          'State which hold-down method is used for sheet goods',
          'Walk Jose through the full material setup sequence from memory',
        ],
        task: 'Write: Why does Z-zero matter? What hold-down method do we use for sheet goods? Walk Jose through the full material setup sequence from memory.',
        tip: 'Material setup is the foundation of every cut. Own it.',
      },
    ],

    4: [
      {
        topic: 'Cutting a Straight Line — Feed Rate & Cut Direction',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up a straight-line cut correctly',
          'Understand climb vs. conventional cutting direction',
          'Verify the cut setup before running',
        ],
        task: 'Watch the basic cutting video. Set up a straight-line cut on scrap. Jose approves before running.',
        tip: 'Climb cutting can grab the material — use conventional on first passes.',
      },
      {
        topic: 'Cutting a Rectangle — Pocket vs. Profile & Tabs',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up a profile cut with tabs correctly',
          'Understand the difference between pocket and profile cuts',
          'Identify tab locations in the toolpath preview',
        ],
        task: 'Watch the rectangle cuts video. Set up a rectangle cut with tabs on scrap.',
        tip: 'Tabs prevent parts from flying when the cut completes. Never cut without tabs on loose parts.',
      },
      {
        topic: 'Practice — First Live Cuts',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run 3 live rectangle cuts on scrap material',
          'Measure each part after cutting',
          'Compare measured dimensions to programmed dimensions',
        ],
        task: 'Cut 3 rectangles from scrap material. Jose supervises. Measure each part after cutting — compare to programmed dimensions.',
        tip: 'First cuts are about process. Slow and correct beats fast and wrong.',
      },
      {
        topic: 'Feed Rates & Speeds',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand what feed rate and spindle speed mean',
          'Know NFR standard settings for sheet goods',
          'Know when to adjust and when to stop',
        ],
        task: 'Watch the feed and speed video. Write down the standard settings Jose uses for plywood and MDF.',
        tip: 'If the bit burns or chatters, something is wrong — stop and ask.',
      },
      {
        topic: 'Week 4 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain what a tab is and why it exists',
          'Compare your cut dimensions to programmed dimensions',
          'Describe what happened on your first cut',
        ],
        task: 'Write: What is a tab and why does it exist? What were your cut dimensions vs. programmed dimensions? What happened on your first cut?',
        tip: 'Your first cuts tell you a lot about your setup habits.',
      },
    ],

    5: [
      {
        topic: 'What Mozaik Outputs — File Types & Naming',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand what Mozaik generates for the CNC',
          'Know the NFR file naming convention',
          'Understand the difference between box part and door files',
        ],
        task: 'Sit with Maria for 30 minutes. Have her show you how she exports a cut file from Mozaik. Write down what you observed.',
        tip: 'Maria is your upstream — understand her output before cutting it.',
      },
      {
        topic: 'Loading a Mozaik File',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load a real Mozaik export into the ShopSabre software',
          'Verify the file loaded correctly with no errors',
          'Preview the full toolpath',
        ],
        task: 'Load a real Mozaik export. Preview the full toolpath. List every part you see in the preview.',
        tip: 'Every part in the preview should match the cut list Maria generated.',
      },
      {
        topic: 'Practice — Reading Cut Files',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load 3 different Mozaik files independently',
          'List every part by name and dimension before previewing',
          'Verify each part against the preview',
        ],
        task: 'Load 3 different Mozaik files. For each, list every part by name and dimension before previewing. Then preview and verify.',
        tip: 'Reading before previewing builds the habit of thinking before cutting.',
      },
      {
        topic: 'Cross-Checking Cut List Against Machine File',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Compare the Mozaik cut list to the loaded machine file',
          'Identify any discrepancies between them',
          'Know what to do if they don\'t match',
        ],
        task: 'Take a real Mozaik cut list and a loaded machine file. Cross-check every part. Flag anything that doesn\'t match to Jose.',
        tip: 'If the file and cut list disagree, stop. Do not cut.',
      },
      {
        topic: 'Week 5 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain the difference between box part, door, and drawer front files',
          'State the procedure when file and cut list don\'t match',
          'Describe how Maria\'s output becomes your input',
        ],
        task: 'Write: What is the difference between a box part, a door, and a drawer front in a Mozaik file? What do you do if the file and cut list don\'t match?',
        tip: 'Understanding the upstream makes you a better operator.',
      },
    ],

    6: [
      {
        topic: 'Pre-Cut Checklist',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Build a personal pre-cut checklist for every job',
          'Get it approved by Jose as the NFR standard',
          'Commit to running it before every single cut',
        ],
        task: 'Write your own pre-cut checklist. Bring it to Jose for approval. This becomes your permanent standard.',
        tip: 'If you skip the checklist once, you\'ll skip it again. Don\'t start that habit.',
      },
      {
        topic: 'First Live Mozaik Cut — Simple Parts',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run a complete Mozaik job file from load to finished parts',
          'Follow the pre-cut checklist on every step',
          'Measure all parts after cutting and record results',
        ],
        task: 'Run the cut with Jose watching the full session. Measure every part. Save results in the training log.',
        tip: 'First cut is about process, not speed. Slow and correct.',
      },
      {
        topic: 'Practice — Second Cut Independently',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run a complete Mozaik cut independently',
          'Measure all parts and compare to programmed dimensions',
          'Flag any variance outside tolerance to Jose',
        ],
        task: 'Run a second Mozaik cut on your own. Jose is nearby but not watching every step. Measure all parts. Flag any variance.',
        tip: 'Independence is earned by doing it correctly, not quickly.',
      },
      {
        topic: 'Post-Cut Part Inspection',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Measure every cut part against the cut list',
          'Identify acceptable vs. unacceptable variance',
          'Know when to recut vs. when to flag to Jose',
        ],
        task: 'Inspect all parts from the week\'s cuts. Record measurements in the log. Flag anything outside tolerance to Jose.',
        tip: 'Measure twice, flag once — don\'t guess.',
      },
      {
        topic: 'Week 6 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Describe what was hardest about the first live cut',
          'Identify what you would do differently',
          'Write the final pre-cut checklist from memory',
        ],
        task: 'Write: What was hardest about your first cut? What would you do differently? Write your final pre-cut checklist from memory.',
        tip: 'The gap between your first cut and your tenth is where skill lives.',
      },
    ],

    7: [
      {
        topic: 'Nesting — Part Arrangement & Waste Minimization',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand how nesting arranges parts on a panel',
          'Calculate waste percentage from a nesting layout',
          'Identify when waste is too high to approve',
        ],
        task: 'Watch the nesting video. Review a Mozaik sheet layout. Calculate the waste percentage.',
        tip: 'Above 20% waste, flag to Jose before approving the cut.',
      },
      {
        topic: 'Cutting a Full 4×8 Panel',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load and set up a full panel with multiple parts',
          'Manage the cut sequence correctly',
          'Handle tabs correctly on a multi-part panel',
        ],
        task: 'Assist Jose or observe a full panel cut. Write every step he takes in sequence.',
        tip: 'Full panels are heavy — get help loading and unloading.',
      },
      {
        topic: 'Practice — Full Panel Independently',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load, cut, and unload a full panel independently',
          'Stack parts by part type after unloading',
          'Pass Jose\'s inspection',
        ],
        task: 'Load, cut, and unload a full panel on your own. Stack parts by part type. Jose inspects.',
        tip: 'Organized parts after unloading saves time in assembly.',
      },
      {
        topic: 'Panel Handling — Loading, Unloading & Stacking',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Load a full panel safely without bowing',
          'Unload cut parts without breaking tabs incorrectly',
          'Stack finished parts by part type and job',
        ],
        task: 'Practice 3 full panel load/unload cycles with scrap material.',
        tip: 'Never stack cut parts randomly — a mixed stack causes job errors downstream.',
      },
      {
        topic: 'Week 7 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain how to prevent a panel from shifting mid-cut',
          'Describe the correct stacking method for finished parts',
          'Demonstrate a full panel cut sequence from memory',
        ],
        task: 'Write: How do you prevent a panel from shifting? What is the correct stacking method for finished parts?',
        tip: 'Handling is half the job. Treat it seriously.',
      },
    ],

    8: [
      {
        topic: 'Door Dimensions — How Mozaik Sets Them',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand how Mozaik calculates door sizing from opening dimensions',
          'Know the standard overlay and gap settings',
          'Read door dimensions correctly from the cut list',
        ],
        task: 'Review door dimensions in a real Mozaik file with Maria. Write down how door width is calculated from cabinet opening.',
        tip: 'Door sizing errors are the most common defect. Know the formula.',
      },
      {
        topic: 'Cutting Door Panels — Tolerances & Grain Direction',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Set up a door cut with correct grain direction',
          'Run the cut with proper tolerances',
          'Inspect all door panels after cutting',
        ],
        task: 'Watch the door cutting module. Cut a set of 4 doors from a real Mozaik file. Measure all 4.',
        tip: 'Grain direction is non-negotiable on wood-look panels. Wrong direction = reject.',
      },
      {
        topic: 'Practice — Full Door Set',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Cut a complete door set from a real job file independently',
          'Measure all doors against the cut list',
          'Flag anything outside tolerance',
        ],
        task: 'Cut a complete door set from a real job file without Jose present. Measure all doors. Flag anything outside tolerance.',
        tip: 'Door quality is what the client sees and touches. Own the standard.',
      },
      {
        topic: 'Drawer Fronts — Sizing & False Front Rules',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand drawer front sizing rules',
          'Cut a set of drawer fronts correctly',
          'Verify false front reveal is consistent on all four sides',
        ],
        task: 'Watch the drawer front video. Cut a drawer front set from scrap. Check reveal consistency on all sides.',
        tip: 'Drawer front gaps should be equal top, bottom, and sides. Measure all four.',
      },
      {
        topic: 'Week 8 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the tolerance used on door width',
          'Explain why grain direction matters',
          'Describe the reveal standard for drawer fronts',
        ],
        task: 'Write: What tolerance do we use on door width? Why does grain direction matter? What is the reveal standard for drawer fronts?',
        tip: 'Doors and drawer fronts are the client-facing parts. Hold the standard.',
      },
    ],

    9: [
      {
        topic: 'Bit Types — Compression, Downcut, Upcut & V-Bits',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify each bit type by sight',
          'Know which bit to use for each material and cut type',
          'Know where bits are stored and how they\'re labeled',
        ],
        task: 'Walk the shop and find every bit. Identify its type. Write down which bit is used for sheet good box parts and which for doors.',
        tip: 'Using the wrong bit destroys surface quality.',
      },
      {
        topic: 'Changing a Bit — Collet, Torque & Runout Check',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Change a bit safely and correctly',
          'Torque the collet to the correct specification',
          'Perform a runout check before cutting',
        ],
        task: 'Watch the tool change video. Observe Jose change a bit. Then do it yourself under supervision.',
        tip: 'Under-torqued bits spin loose mid-cut. Over-torqued collets crack.',
      },
      {
        topic: 'Practice — Bit Change Independently',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Complete 3 full bit changes independently',
          'Pass Jose\'s inspection for torque and runout on each',
          'Build the habit before it matters on a live job',
        ],
        task: 'Complete 3 full bit changes independently. Jose inspects each for correct torque and runout. No cuts until approved.',
        tip: 'Bit changes done right take 5 minutes. Done wrong, they cost hours.',
      },
      {
        topic: 'Tool Life — When to Replace & Signs of a Dull Bit',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify visual signs of a dull bit',
          'Know the life expectancy of our standard bits',
          'Know the replacement process and who to notify',
        ],
        task: 'Watch the tool wear video. Inspect all current bits and note condition in the log. Flag any that need replacement to Jose.',
        tip: 'A dull bit burns, chatters, and tears the material. If you see any of those, stop.',
      },
      {
        topic: 'Week 9 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Describe how to identify a dull bit',
          'Explain what a dull bit does to cut quality',
          'Write the correct bit change procedure from memory',
        ],
        task: 'Write: How do you know a bit is dull? What does a dull bit do to cut quality? What is the correct change procedure from memory?',
        tip: 'Tool management is machine management. Own both.',
      },
    ],

    10: [
      {
        topic: 'Daily Maintenance — Lubrication, Dust Collection & Rail Cleaning',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify all lubrication points on the machine',
          'Clean the rails correctly',
          'Empty and check the dust collection system',
        ],
        task: 'Watch the daily maintenance video. Walk the machine and find every lubrication point. Do the full daily maintenance routine with Jose.',
        tip: 'A dirty machine makes bad cuts. Maintenance is part of the job.',
      },
      {
        topic: 'Weekly Maintenance Checklist',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Build a personal weekly maintenance checklist',
          'Understand what happens when maintenance is skipped',
          'Commit to the maintenance schedule',
        ],
        task: 'Watch the weekly maintenance video. Build Scott\'s personal weekly maintenance checklist. Jose approves it.',
        tip: 'The checklist is not optional — it\'s what protects the machine investment.',
      },
      {
        topic: 'Practice — Full Maintenance Routine',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Complete the full daily maintenance routine independently',
          'Complete the applicable weekly checklist items',
          'Pass Jose\'s inspection',
        ],
        task: 'Complete full daily maintenance independently. Then do the weekly checklist items that apply to today. Jose inspects.',
        tip: 'Maintenance done consistently costs less than repairs done reactively.',
      },
      {
        topic: 'Calibration — Squaring the Machine & Z-Height Accuracy',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Understand what machine calibration means',
          'Assist with a calibration check on the actual machine',
          'Know when calibration is needed vs. when it\'s an operator error',
        ],
        task: 'Watch the calibration video. Assist Jose with a calibration check on the machine.',
        tip: 'If cuts are consistently off in one direction, that\'s a calibration issue, not an operator error.',
      },
      {
        topic: 'Week 10 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Explain what happens to cut quality when rails aren\'t clean',
          'State the first thing to check when a cut is off-dimension',
          'Complete the full maintenance routine from memory',
        ],
        task: 'Write: What happens to cut quality if rails aren\'t clean? What\'s the first thing you check if a cut is off-dimension? Complete the full maintenance routine from memory.',
        tip: 'A machine you maintain is a machine you understand.',
      },
    ],

    11: [
      {
        topic: 'Part Inspection Process — What to Measure & Acceptable Tolerances',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Know the tolerance range for box panels, doors, and drawer fronts',
          'Measure parts correctly with a tape measure',
          'Record measurements accurately in the inspection log',
        ],
        task: 'Build a part inspection checklist with Jose. Write the tolerance for each part type.',
        tip: 'Measure twice. Never guess.',
      },
      {
        topic: 'Identifying Cut Defects — Tearout, Burning, Undersized & Oversized',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Identify each defect type visually',
          'Know the cause of each defect',
          'Know which defects are fixable vs. require a recut',
        ],
        task: 'Watch the quality control video. Find examples of each defect in scrap. Photograph and label each.',
        tip: 'Every defect has a cause. Find the cause, not just the defect.',
      },
      {
        topic: 'Practice — Full Inspection',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Inspect a complete set of parts from a real job',
          'Record every measurement in the inspection log',
          'Flag anything outside tolerance without prompting',
        ],
        task: 'Inspect a complete set of parts from a real job. Record every measurement. Flag anything outside tolerance.',
        tip: 'Do not release parts that fail inspection without Jose\'s explicit approval.',
      },
      {
        topic: 'What to Do When a Part is Wrong',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Apply the decision tree for a wrong part — recut, trim, or flag',
          'Understand the cost of each option',
          'Know how to communicate a recut to Jose clearly',
        ],
        task: 'Discuss with Jose: at what variance does a part get flagged vs. accepted? Write the decision rules.',
        tip: 'Never use a part you\'re not sure about. A bad part costs more to fix in assembly than to recut now.',
      },
      {
        topic: 'Week 11 Review',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'State the tolerance range for a box panel',
          'Answer the first question when a part is wrong',
          'Complete a full inspection of today\'s cut parts',
        ],
        task: 'Write: What is the tolerance range for a box panel? What is the first question when a part is wrong? Complete a full inspection of today\'s cut parts.',
        tip: 'Quality control is not a final step — it\'s built into every step.',
      },
    ],

    12: [
      {
        topic: 'Job Setup — Receive File, Review Cut List & Stage Material',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Receive a job file from Maria and review the full cut list',
          'Stage all material in the correct zone with correct labels',
          'Flag any cut list discrepancies before staging begins',
        ],
        task: 'Take a real job from Maria. Review the file and cut list. Pull and stage all material. Label the staging bundle: [JobName] | [CutDate] | Scott.',
        tip: 'If anything on the cut list looks wrong, call Maria before staging.',
      },
      {
        topic: 'Cut the Job — All Panels, Doors & Drawer Fronts',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run the full cut in the correct sequence',
          'Follow the pre-cut checklist on every step',
          'Manage tabs and finished parts correctly throughout',
        ],
        task: 'Run the full cut. Jose spot-checks only — no hand-holding.',
        tip: 'You know how to do this. Trust your training.',
      },
      {
        topic: 'Practice — Second Full Job',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Run a second full job independently',
          'Maintain the same quality standard as the first',
          'Identify where you\'re gaining confidence and where you need more reps',
        ],
        task: 'Run a second full job independently. Jose is available but not watching.',
        tip: 'Speed comes from confidence. Confidence comes from doing it correctly.',
      },
      {
        topic: 'Part Inspection & Job Packaging',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Inspect every part against the cut list',
          'Flag any issues before packaging',
          'Package parts by cabinet and label for assembly or staging',
        ],
        task: 'Inspect all parts from Tuesday\'s cut. Package by cabinet. Write the inspection report.',
        tip: 'The package you send to assembly is your signature. Make it clean and organized.',
      },
      {
        topic: 'Week 12 Graduation',
        resourceLabel: CNC_LABEL,
        resourceUrl: CNC_URL,
        objectives: [
          'Present the full job from Mozaik file to finished parts',
          'Identify what went well and what needs work',
          'Write your training log final entry',
        ],
        task: 'Present to Jose: walk through the full job from Mozaik file to finished parts. What went well? What needs work? What\'s next? Write your training log final entry.',
        tip: 'Week 12 is the baseline. Every real job from here is your ongoing training.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // FIELD PLAN — Jorge (Weeks 1–10)
  // ═══════════════════════════════════════════════════════════════════════════

  const FIELD_URL_SAFETY  = 'https://www.osha.gov/construction';
  const FIELD_URL_QUALITY = 'https://www.youtube.com/results?search_query=construction+quality+control';
  const FIELD_LABEL       = 'Training Resource';

  const FIELD_PLAN = {
    1: [
      {
        topic: 'PPE Requirements by Trade',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Know the required PPE for each NFR trade type',
          'Check crew PPE before work starts each day',
          'Correct crew members if PPE is missing',
        ],
        task: 'Review the OSHA construction safety page. List the required PPE for: paint, demo, flooring, and drywall.',
        tip: 'You are responsible for crew PPE on your site. If someone gets hurt without PPE, it comes back to you.',
      },
      {
        topic: 'Hazard Identification',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Identify the 5 most common job site hazards for NFR work',
          'Know how to report a hazard to Jose',
          'Create a hazard log entry with photos',
        ],
        task: 'Walk a real or mock job site. Identify and photograph 5 potential hazards. Report to Jose via WhatsApp with photos.',
        tip: 'The hazard you identify today is the injury that doesn\'t happen next week.',
      },
      {
        topic: 'Practice — Safety Walk',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Complete an independent safety walk on an active job site',
          'Log every hazard identified',
          'Report findings to Jose without prompting',
        ],
        task: 'Complete an independent safety walk on an active job site. Log every hazard. Report to Jose.',
        tip: 'A safety walk you do once gets noticed. One you do every time saves someone.',
      },
      {
        topic: 'Chemical Safety — Paint, Epoxy & Adhesives',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Know SDS requirements for paint, epoxy, and adhesive products',
          'Ensure proper ventilation before crew starts chemical work',
          'Know emergency response for chemical exposure',
        ],
        task: 'Look up the SDS for the paint product currently on a job. Write down the ventilation requirement and emergency response.',
        tip: 'Never let crew work with chemical products in an unventilated space.',
      },
      {
        topic: 'Week 1 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'State the 3 non-negotiable PPE items for a demo job',
          'Know the protocol when a crew member refuses PPE',
          'Demonstrate safety walk from memory',
        ],
        task: 'Write: What are the 3 non-negotiable PPE items for a demo job? What do you do if a crew member refuses to wear PPE?',
        tip: 'PPE refusal is a non-negotiable situation. Know your response before it happens.',
      },
    ],

    2: [
      {
        topic: 'What\'s in a Scope Document',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Read and understand all sections of an NFR scope/proposal',
          'Identify the start and end of each line item',
          'Know what is and is not included in the scope',
        ],
        task: 'Read a real NFR proposal from the templates folder. List every line item and what it covers.',
        tip: 'If you don\'t understand a line item, ask Jose before the job starts — not during.',
      },
      {
        topic: 'Line Item Breakdown',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Translate each line item into specific field tasks',
          'Know who performs each task',
          'Estimate what each task requires in time and materials',
        ],
        task: 'Take the proposal from Monday. For each line item, write: who does it, what materials they need, how long it should take.',
        tip: 'This is how you plan the job before you arrive on site.',
      },
      {
        topic: 'Practice — Scope Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Review a scope for a real upcoming job',
          'Write a complete field plan: who, what, when for each line item',
          'Present the plan to Jose for review',
        ],
        task: 'Review a scope for an upcoming real job. Write your field plan: who, what, when for each line item.',
        tip: 'A written plan before the job prevents a verbal excuse during the job.',
      },
      {
        topic: 'Change Order Triggers — What is NOT in Scope',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Identify when a client request is outside the original scope',
          'Know the exact language to use when a change order situation arises',
          'Know how to escalate to Jose immediately',
        ],
        task: 'Review NFR\'s change order template. Write 3 examples of scope creep that Jorge might encounter on site.',
        tip: 'Never agree to extra work without calling Jose first. Every undocumented extra eats profit.',
      },
      {
        topic: 'Week 2 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'State the 3 most common scope creep situations in NFR work',
          'Know the exact words to say to a client asking for extra work',
          'Apply scope reading skills to a real upcoming job',
        ],
        task: 'Write: What are the 3 most common scope creep situations in NFR work? What exact words do you say to a client who asks for extra work?',
        tip: 'The right words said calmly on site save the relationship and the margin.',
      },
    ],

    3: [
      {
        topic: 'How to Give Clear Task Instructions',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Give instructions that include: what, how, when, and what done looks like',
          'Practice written task briefings before verbal ones',
          'Get a briefing reviewed by Jose before using it',
        ],
        task: 'Practice giving a task briefing — written first, then verbal. Jose reviews.',
        tip: 'If your instruction can be misunderstood, it will be.',
      },
      {
        topic: 'Setting Daily Production Targets',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Set a realistic daily output target for each trade',
          'Communicate it to the crew at the start of the day',
          'Check progress at midday and adjust',
        ],
        task: 'For a current job, set a daily target for the crew. Check at 11am. Report to Jose by EOD whether target was hit.',
        tip: 'A crew without a daily target drifts. A crew with one moves.',
      },
      {
        topic: 'Practice — Daily Briefing',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Give the full crew morning briefing independently',
          'Include: today\'s target, each person\'s assignment, what done looks like',
          'Have Jose observe and provide feedback',
        ],
        task: 'Give the full crew morning briefing independently. Jose observes. Briefing must include: today\'s target, each person\'s assignment, and what done looks like.',
        tip: 'The briefing sets the tone. Own it.',
      },
      {
        topic: 'Managing Crew Pace and Quality',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Identify when a crew is falling behind pace',
          'Correct pace without micromanaging',
          'Catch quality issues in the moment before they compound',
        ],
        task: 'Observe a crew for 2 hours. Log pace observations. Identify one quality or pace correction and make it. Report to Jose.',
        tip: 'Correct early and clearly. Don\'t let problems build until they\'re too big to fix on-site.',
      },
      {
        topic: 'Week 3 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Describe the hardest part of directing a crew',
          'State the protocol when a crew member pushes back on instruction',
          'Apply briefing skills on a real job site',
        ],
        task: 'Write: What is the hardest part of directing a crew? What do you do when a crew member pushes back on your instruction?',
        tip: 'Pushback handled well builds authority. Handled poorly, it undermines it.',
      },
    ],

    4: [
      {
        topic: 'Paint Prep Standards',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the surface prep requirements before painting',
          'Verify prep is complete before paint starts',
          'Flag any surface issues that will affect the finish',
        ],
        task: 'Review NFR\'s paint SOP. List every prep step in order. Walk a prepped surface and verify against the list.',
        tip: '80% of a bad paint job is bad prep. Never let paint start on a surface that isn\'t ready.',
      },
      {
        topic: 'Cut Line and Edge Standards',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Define what an acceptable cut line looks like',
          'Identify unacceptable cut lines on a real job',
          'Know the correction process for failed cut lines',
        ],
        task: 'Inspect cut lines on a paint job in progress or completed. Photograph any that fail the standard. Show Jose.',
        tip: 'Cut lines are what clients look at first. They notice before anything else.',
      },
      {
        topic: 'Practice — Full Paint Inspection',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Complete an independent paint inspection on a real or practice surface',
          'Photograph all findings',
          'Log findings with specific descriptions',
        ],
        task: 'Complete an independent paint inspection on a real or practice surface. Photograph and log all findings.',
        tip: 'What you document, you own. Document everything.',
      },
      {
        topic: 'Paint Inspection Checklist',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Build a personal paint inspection checklist',
          'Cover all inspection points consistently',
          'Get Jose\'s approval before using it on jobs',
        ],
        task: 'Build the paint inspection checklist. Jose approves it.',
        tip: 'The checklist is what keeps you from missing something on a busy day.',
      },
      {
        topic: 'Week 4 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Use the new paint inspection checklist on a completed job',
          'Write what passed, what failed, what surprised you',
          'Own the paint quality standard for every NFR job going forward',
        ],
        task: 'Inspect a completed paint job using your new checklist. Write: What passed, what failed, what did you find that surprised you?',
        tip: 'Your checklist is only as good as your commitment to using it every time.',
      },
    ],

    5: [
      {
        topic: 'Subfloor Prep Standards',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know acceptable subfloor conditions for LVP and carpet',
          'Identify issues that must be fixed before install begins',
          'Know who is responsible for fixing each type of issue',
        ],
        task: 'Review subfloor prep standards. Inspect a subfloor on a job site and log its condition.',
        tip: 'A bad subfloor telegraphs through any flooring. Never approve install on a bad subfloor.',
      },
      {
        topic: 'Seam and Transition Standards',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Define an acceptable seam in LVP and carpet',
          'Identify unacceptable seam placement or quality',
          'Know the transition strip standard at doorways',
        ],
        task: 'Inspect seams and transitions on a completed flooring job. Photograph any that fail the standard.',
        tip: 'Seams in high-traffic areas and visible doorways are client hot buttons. Inspect those first.',
      },
      {
        topic: 'Practice — Full Flooring Inspection',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Complete an independent flooring inspection',
          'Log all findings with photos',
          'Flag any issues before client walkthrough',
        ],
        task: 'Complete an independent flooring inspection. Log all findings with photos.',
        tip: 'Flooring issues found before client walkthrough cost nothing. Found after, they cost trust.',
      },
      {
        topic: 'Flooring Inspection Checklist',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Build a personal flooring inspection checklist',
          'Cover subfloor, seams, transitions, and edges',
          'Get Jose\'s approval before using it on jobs',
        ],
        task: 'Build Jorge\'s flooring inspection checklist. Jose approves.',
        tip: 'Same principle as paint — the checklist is your standard.',
      },
      {
        topic: 'Week 5 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Inspect a flooring job using the new checklist',
          'Write findings including what passed and what failed',
          'Identify one improvement to the checklist',
        ],
        task: 'Inspect a flooring job using your checklist. Write findings: what passed, what failed, and one thing to add to the checklist.',
        tip: 'A checklist that never improves eventually becomes obsolete.',
      },
    ],

    6: [
      {
        topic: 'Demo Scope Verification',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Verify what comes down and what stays before demo starts',
          'Walk the scope with the crew before the first swing',
          'Know how to handle unexpected discoveries',
        ],
        task: 'Review a demo scope. Walk the space and mark what comes down.',
        tip: 'A demo mistake is irreversible. Verify twice before the crew starts.',
      },
      {
        topic: 'Safe Demo Sequence',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Know the correct top-down demo sequence',
          'Understand structural awareness — what cannot be touched',
          'Manage dust and debris flow correctly',
        ],
        task: 'Watch a demo sequence video. Write the correct sequence for a standard room gut demo.',
        tip: 'Demo from top to bottom. Taking a load-bearing wall down wrong ends the job and starts a lawsuit.',
      },
      {
        topic: 'Practice — Demo Walkthrough',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Walk a demo job from start to finish',
          'Log sequence, crew PPE, and debris management',
          'Identify anything that deviates from the correct procedure',
        ],
        task: 'Walk a demo job start to finish. Log sequence, crew PPE, and debris management.',
        tip: 'What you inspect, you influence.',
      },
      {
        topic: 'Post-Demo Inspection Checklist',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Build a post-demo inspection checklist',
          'Cover debris removal, floor condition, structural integrity, and utilities',
          'Get Jose\'s approval before using it',
        ],
        task: 'Build Jorge\'s post-demo inspection checklist. Jose approves. Include: debris removal complete, floor swept, no structural damage, utilities marked.',
        tip: 'A clean demo site is as important as a clean finished job.',
      },
      {
        topic: 'Week 6 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_SAFETY,
        objectives: [
          'Walk a completed demo and run the new checklist',
          'Identify what was missed and what passed',
          'Reflect on what you\'d do differently',
        ],
        task: 'Walk a completed demo. Run your new checklist. Write: What was missed, what passed, what would you do differently next time?',
        tip: 'Every demo teaches you something about the next one.',
      },
    ],

    7: [
      {
        topic: 'NFR Photo Protocol',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the required photos for every job type',
          'Know when to take before, milestone, and after photos',
          'Understand why before photos protect NFR legally',
        ],
        task: 'Review NFR WhatsApp photo protocol. List every required photo for a standard paint job.',
        tip: 'If it\'s not photographed, it didn\'t happen. Before photos protect NFR legally.',
      },
      {
        topic: 'CompanyCam for Interior Surface Jobs',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Set up CompanyCam correctly on a job',
          'Tag photos to the correct project',
          'Know what Jose needs to see in CompanyCam',
        ],
        task: 'Open CompanyCam. Find the active Interior Surface project. Upload 5 photos tagged correctly.',
        tip: 'Interior Surface clients look at CompanyCam. Every photo is client-facing.',
      },
      {
        topic: 'Practice — Full Photo Documentation',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Document a real job site from start to finish',
          'Use the full photo protocol without prompting',
          'Have Jose review the photos for completeness',
        ],
        task: 'Document a real job site from start to finish using the full photo protocol. Jose reviews the photos.',
        tip: 'Documentation habits built now protect you on every future job.',
      },
      {
        topic: 'What Makes a Good Site Photo',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the difference between a useful and a useless site photo',
          'Take photos that show progress, context, and quality',
          'Get Jose\'s feedback on photo quality',
        ],
        task: 'Take 10 site photos. Jose rates each as useful or not useful. Discuss why.',
        tip: 'A photo of a wall from 3 feet away shows nothing. Step back. Show context.',
      },
      {
        topic: 'Week 7 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Conduct full photo documentation independently',
          'Have Jose spot-check the results',
          'Build photo documentation as a daily non-negotiable habit',
        ],
        task: 'Conduct full photo documentation on a real job independently. Jose spot-checks.',
        tip: 'The photos you take become the record of every job. Make them count.',
      },
    ],

    8: [
      {
        topic: 'What Jorge Can and Cannot Say',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Know the boundaries of Jorge\'s client communication authority',
          'Know which questions to redirect to Jose immediately',
          'Know how to handle scope questions on site',
        ],
        task: 'Review NFR client communication rules. Write: 5 things Jorge can answer, 5 things that go to Jose immediately.',
        tip: 'Saying the wrong thing to a client on site can cost more than the job. When in doubt, redirect.',
      },
      {
        topic: 'Handling Client Questions About Scope or Timeline',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Respond to client scope questions without committing to anything',
          'Give professional responses that buy time to call Jose',
          'Keep the client calm and confident while getting more information',
        ],
        task: 'Practice 3 client scenarios with Jose. He plays the client.',
        tip: '"Let me confirm that with Jose and get back to you by end of day" is always a correct answer.',
      },
      {
        topic: 'Practice — Client Scenarios',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Handle 5 client scenarios with increasing difficulty',
          'Stay calm and redirect without seeming evasive',
          'Build confidence in client-facing communication',
        ],
        task: '5 more client scenarios with Jose. Focus on keeping calm and redirecting without seeming evasive.',
        tip: 'Calm redirection builds more trust than an on-the-spot answer that\'s wrong.',
      },
      {
        topic: 'What to Do When a Client is Unhappy',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'De-escalate a client complaint on site',
          'Never argue or defend on the spot',
          'Get Jose involved immediately with full context',
        ],
        task: 'Practice one difficult client scenario with Jose. Write the protocol for an unhappy client.',
        tip: 'Your job is to listen and get Jose involved. Not to fix the complaint yourself.',
      },
      {
        topic: 'Week 8 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'State the 3 most common client questions received on site',
          'Write a scripted response to each',
          'Apply the unhappy client protocol from memory',
        ],
        task: 'Write: What are the 3 most common client questions you get on site? What is your response to each?',
        tip: 'Scripted responses aren\'t robotic — they\'re professional.',
      },
    ],

    9: [
      {
        topic: 'Reading the Project Schedule',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Read and understand the NFR project schedule',
          'Know each trade\'s window on the schedule',
          'Identify dependencies between trades',
        ],
        task: 'Review the current week\'s project schedule in Google Calendar. For each active job, identify: what\'s happening, who\'s doing it, what comes next.',
        tip: 'If you don\'t know the schedule, you can\'t flag when it\'s off.',
      },
      {
        topic: 'When to Flag a Job is Running Late',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Identify signs a job will miss its deadline before it actually misses it',
          'Know the threshold for flagging to Jose',
          'Know what information Jose needs when you flag',
        ],
        task: 'For a current job, write a status report: on track vs. at risk. Send to Jose via WhatsApp.',
        tip: 'Flag early. Jose can fix an early warning. He cannot fix a missed deadline.',
      },
      {
        topic: 'Practice — Daily Reporting',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Send Jose a structured EOD field report for each active job',
          'Cover done, in progress, and at risk for every job',
          'Make reporting a daily non-negotiable habit',
        ],
        task: 'Send Jose a structured EOD field report for each active job: done, in progress, at risk. One paragraph per job.',
        tip: 'A report Jose doesn\'t have to ask for is worth twice the one he does.',
      },
      {
        topic: 'Managing Multiple Concurrent Jobs',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Prioritize time across multiple active jobs',
          'Sequence site visits efficiently',
          'Keep Jose informed across all jobs simultaneously',
        ],
        task: 'For the current week\'s jobs, build a daily visit plan — which job, at what time, for how long. Jose reviews.',
        tip: 'You can\'t be on 3 sites at once. Plan your day so each job gets the attention it needs.',
      },
      {
        topic: 'Week 9 Review',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'State how you decide which job to visit first',
          'Write your daily reporting format for Jose',
          'Apply schedule management skills to next week\'s jobs',
        ],
        task: 'Write: How do you decide which job to visit first? What is your reporting format for Jose each day?',
        tip: 'A field manager who owns the schedule owns the outcome.',
      },
    ],

    10: [
      {
        topic: 'Managing vs. Leading on Site',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Understand the difference between task management and team leadership',
          'Identify one leadership behavior to practice this week',
          'Own the outcome of your jobs — not just your tasks',
        ],
        task: 'Read or discuss: what is the difference between a manager and a leader? Write one leadership behavior you will practice this week.',
        tip: 'A manager tells people what to do. A leader makes them want to do it right.',
      },
      {
        topic: 'Building Crew Reliability',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Understand what makes a crew reliable vs. unreliable',
          'Identify one thing Jorge does that builds crew trust',
          'Identify one thing that undermines it',
        ],
        task: 'Write: What makes your best 1099 crew member reliable? What do you do that makes them want to show up for NFR?',
        tip: 'Reliable crews are earned, not assigned.',
      },
      {
        topic: 'Self-Management — Owning Your Scope',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Take personal ownership of every job on your list',
          'Stop waiting for Jose to catch things — catch them yourself',
          'Bring solutions not just problems to every conversation with Jose',
        ],
        task: 'Audit your current jobs. Find one thing that could be better. Fix it or propose the fix to Jose.',
        tip: 'Jose\'s job is not to run the field — it\'s yours. Own it.',
      },
      {
        topic: 'Bringing Solutions, Not Problems',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Identify problems early and think through solutions before escalating',
          'Come to Jose with a proposed solution alongside every problem',
          'Eliminate pure problem-reporting without thinking first',
        ],
        task: 'For the next issue that comes up on site, write a 2-sentence solution before calling Jose. Practice saying: "We have a problem and here\'s what I think we should do."',
        tip: 'Anyone can report a problem. Leaders bring options.',
      },
      {
        topic: 'Week 10 Graduation — Field Leadership Assessment',
        resourceLabel: FIELD_LABEL,
        resourceUrl: FIELD_URL_QUALITY,
        objectives: [
          'Demonstrate field leadership across all trained areas',
          'Receive Jose\'s evaluation on site',
          'Write a personal self-assessment after the evaluation',
        ],
        task: 'Jose and Jorge walk an active job site together. Jose evaluates: safety, quality, crew direction, documentation, communication. Jorge writes a self-assessment after.',
        tip: 'The best field managers are always studying. Every job teaches you something if you pay attention.',
      },
    ],
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // TRAINING CONTENT CONFIG
  // ═══════════════════════════════════════════════════════════════════════════

  const TRAINING_CONTENT = {
    maria: {
      name:      'Maria',
      role:      'Designer / Office Manager',
      color:     '#5F8062',
      anchor:    '2026-03-16',
      startWeek: 8,
      plan:      MOZAIK_PLAN,
    },
    scott: {
      name:      'Scott',
      role:      'Warehouse Manager / CNC Operator',
      color:     '#C4622D',
      anchor:    '2026-03-16',
      startWeek: 1,
      plan:      CNC_PLAN,
    },
    jorge: {
      name:      'Jorge',
      role:      'Field Manager',
      color:     '#7BAFD4',
      anchor:    '2026-03-16',
      startWeek: 1,
      plan:      FIELD_PLAN,
    },
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // getTrainingDay
  // ═══════════════════════════════════════════════════════════════════════════

  /**
   * Returns the training content for a given employee on a given date.
   * Returns null on weekends, before anchor date, or when no plan exists.
   */
  function getTrainingDay(employee, dateStr) {
    const config = TRAINING_CONTENT[employee];
    if (!config) return null;

    const date = new Date(dateStr + 'T12:00:00');
    const dow = date.getDay();
    if (dow === 0 || dow === 6) return null;

    const anchor = new Date(config.anchor + 'T12:00:00');
    const diffDays = Math.round((date - anchor) / 86400000);
    if (diffDays < 0) return null;

    const weekOffset = Math.floor(diffDays / 7);
    const weekNum    = config.startWeek + weekOffset;
    const dayIdx     = dow - 1; // Mon=0, Fri=4

    const weekPlan = config.plan[weekNum];
    if (!weekPlan) return null;

    return {
      week: weekNum,
      day:  dayIdx + 1,
      employee,
      ...weekPlan[dayIdx],
    };
  }

  // ── exports ────────────────────────────────────────────────────────────────
  window.TRAINING_CONTENT = TRAINING_CONTENT;
  window.getTrainingDay   = getTrainingDay;
})();
