const db = require('./db_connect');




async function seeder_data()
{
    // console.log(db.promise());


    try
    {
        await db.promise().query(`
           INSERT INTO company(company_name) VALUES
           ('mrc'),('microsoft'), ('aple'), 

           ('mrc'),('microsoft'), ('aple')
        
        `);
        await db.promise().query(`
           INSERT INTO technology(technology_name) VALUES
           ('Node.js'), ('Express'), ('React'), ('MySQL'), 
           ('PHP'), ('Laravel'), ('Python'), ('Vue.js')
        `);
        await db.promise().query(`
           INSERT INTO contra_type(contra_label) VALUES
           ('CDI'), ('CDD'), ('Freelance'), ('Stage')
        `);

        await db.promise().query(`
           INSERT INTO offer(offer_title, offer_description, offer_profile_sought, offer_contact_info, company_company_id, contra_type_id) VALUES
           ('Développeur Full Stack', 'Création web appli', 'Bac+5, 2 ans exp', 'contact@mrc.com', 1, 1),
           ('Ingénieur Node.js', 'API backend creation', 'Bac+3, 1 an exp', 'hr@microsoft.com', 2, 2),
           ('Développeur React', 'Frontend dev', 'Bac+2, débutant', 'jobs@apple.com', 3, 3),
           ('Tech Lead', 'Gestion equipe dev', 'Bac+5, 5 ans exp', 'lead@google.com', 4, 1),
           ('Développeur PHP', 'Maintenance site', 'Bac+2, 1 an exp', 'php@amazon.com', 5, 2),
           ('Développeur Backend', 'Node et Express', 'Bac+5, 3 ans exp', 'backend@mrc.com', 1, 1),
           ('Développeur Frontend', 'Vue.js expert', 'Bac+3, 2 ans exp', 'front@microsoft.com', 2, 4),
           ('Admin Base de données', 'MySQL tuning', 'Bac+5, 4 ans exp', 'dba@apple.com', 3, 1),
           ('DevOps Engineer', 'CI/CD pipeline', 'Bac+5, 2 ans exp', 'devops@google.com', 4, 1),
           ('Développeur Laravel', 'Backend PHP MVC', 'Bac+3, 1 an exp', 'laravel@amazon.com', 5, 2),
           ('Développeur Python', 'Data Science utils', 'Bac+5, 3 ans exp', 'data@mrc.com', 1, 1),
           ('Stagiaire Web', 'HTML/CSS/JS basics', 'Bac+2, étudiant', 'stage@microsoft.com', 2, 4)
        `);
        // await  db.promise().query()

        await db.promise().query(`
           INSERT INTO offer_technology(offer_id, technology_id) VALUES
           (1, 1), (1, 2), (1, 3),
           (2, 1), (2, 2),
           (3, 3),
           (4, 1), (4, 3), (4, 7),
           (5, 5), (5, 4),
           (6, 1), (6, 2), (6, 4),
           (7, 8),
           (8, 4),
           (9, 7),
           (10, 5), (10, 6), (10, 4),
           (11, 7), (11, 4),
           (12, 3), (12, 8)
        `); 

        console.log("data has inserted")
        process.exit();
    }
    catch(error)
    {
        console.error(error);
        process.exit(1);   
    }
}
seeder_data();