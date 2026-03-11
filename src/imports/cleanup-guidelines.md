## Protected Files & Filesystem cleanup guidelines 


Add the missing README.md and CHANGELOG.md to the root of the project and update the /guidelines/Guidelines.md to protect files list and prevent these .md from being deleted from root folder during cleanups.

Regarding the changelog file, the structure, format and version numbers need to follow these sites strictly:

- Keep a changelog - https://keepachangelog.com/en/1.1.0/
- Semver - https://semver.org/


Create a folder in the root for /imports/ instead of the current folder /src/imports/ and update the guidelines to reference the correct imports folder. 


Add a new protected folder called /skills/ in the root of the project, whenever new AI agent skills are imported they need to be added to a new subfolder within skills, like this skill we added today - /skills/wordpress-block-pattern-validator/

Always ignore supabase, we never use supabase on this project - /utils/supabase/ - folder cannot be deleted, because it is protected, so I just want you to add a guideline that clearly states that we don't use supabase on this project. 

Always create .md guidelines files in the /guidelines/ folder or an appropriate subfolder. 

Always create .md user facing documentation in the root of the /docs/ folder.

Always create .sh or .py scripts in the root of the /scripts/ folder. 

Always create .md reports in the root of the /reports/ folder and this is one of the few folders where you are allowed to delete and clean out files from the /reports/archived/ folder. I would also like some kind of a guideline that states that reports that have task lists that have been completed should be deleted seven days after the task list is completed. This is one of the checks you need to run on a regular basis to keep the system clean, only ever delete from the archived folder =  /reports/archived/ - you need to describe the process for archiving very carefully. 

Always create .md task lists in the root of the /tasks/ folder and this is one of the few folders where you are allowed to delete and clean out files from the /tasks/archived/ folder. The all purpose task list is here /tasks/task-list.md and should be used for simple one or two checkbox tasks, every time I ask for something you need to update this file with the task unless it is a full on prompt which requires its own dedicated task list. For tracking the status of all task lists in this /tasks/ folder you need to always maintain this file /tasks/master-task-list.md which will not contain actual tasks it will simply reference active task lists, when a task list is archived, then the master task list should be updated with the new reference. You should always link to task list whether they are active or archived, you should also consider linking the related reports to the task list described in that section on the master-task-list.md document. Lastly, you always update the /guidelines/Guidelines.md file with status changes so I'm just mentioning this here I don't exactly know how you manage this and I would like clear guidelines written about it. You need to describe the process for archiving task lists very carefully. 

The prompts folder should be protected, do not delete files in this folder /prompts/ unless expressly stated. 

