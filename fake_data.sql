-- INSTITUCIONES
INSERT INTO polls_institution (id_institution, name, created_at)
            VALUES (1, 'Instituto Patrulla', current_timestamp);
INSERT INTO polls_institution (id_institution, name, created_at)
            VALUES (2, 'Escuela Patito', current_timestamp);
INSERT INTO polls_institution (id_institution, name, created_at)
            VALUES (3, 'Universidad Politécnica del Barrio', current_timestamp);
INSERT INTO polls_institution (id_institution, name, created_at)
            VALUES (4, 'La Escuela del Gobierno', current_timestamp);

-- SEDES
INSERT INTO polls_branch (name, institution_id, state_id, description, created_at, picture) VALUES (
    'Universidad del Aguacate', '3', 'AS', 
    'Your bones dont break, mine do.',
    current_timestamp, 'https://picsum.photos/600/?random'
);
INSERT INTO polls_branch (name, institution_id, state_id, description, created_at, picture) VALUES (
    'Universidad del Camote', '3', 'PL', 
    'Well, the way they make shows is, they make one show.',
    current_timestamp, 'https://picsum.photos/601/?random'
);
INSERT INTO polls_branch (name, acronym, institution_id, state_id, description, created_at, picture) VALUES (
    'Escuela del Estado del Perrito', 'EEP', '2', 'SP', 
    'Now that we know who you are, I know who I am.',
    current_timestamp, 'https://picsum.photos/602/?random'
);
INSERT INTO polls_branch (name, institution_id, state_id, description, created_at, picture) VALUES (
    'ICKKCK', '1', 'SR', 
    'Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while Im in a transitional period so I dont wanna kill you, I wanna help you. But I cant give you this case, it dont belong to me.',
    current_timestamp, 'https://picsum.photos/603/?random'
);
INSERT INTO polls_branch (name, institution_id, state_id, description, created_at, picture) VALUES (
    'Escuela del Valle', '1', 'DF', 
    'Look, just because I dont be givin no man a foot massage dont make it right for Marsellus to throw Antwone into a glass motherfuckin house, fuckin up the way the nigger talks.',
    current_timestamp, 'https://picsum.photos/604/?random'
);
INSERT INTO polls_branch (name, acronym, institution_id, state_id, description, created_at, picture) VALUES (
    'Universidad del Águila', 'UdA', '2', 'DF', 
    'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.',
    current_timestamp, 'https://picsum.photos/605/?random'
);
INSERT INTO polls_branch (name, institution_id, state_id, description, created_at, picture) VALUES (
    'Instituto del Taco', '3', 'DF', 
    'My money s in that office, right? If she start giving me some bullshit about it aint there, and we got to go someplace else and get it, Im gonna shoot you in the head then and there.',
    current_timestamp, 'https://picsum.photos/606/?random'
);
INSERT INTO polls_branch (name, acronym, institution_id, state_id, description, created_at, picture) VALUES (
    'Escuela de ladrones de Pedro Infante', 'ELPI', '1', 'DF', 
    'The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.',
    current_timestamp, 'https://picsum.photos/607/?random'
);
INSERT INTO polls_branch (name, institution_id, state_id, description, created_at, picture) VALUES (
    'Escuela para pobres', '4', 'DF', 
    'Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime.',
    current_timestamp, 'https://picsum.photos/608/?random'
);
INSERT INTO polls_branch (name, acronym, institution_id, state_id, description, created_at, picture) VALUES (
    'Escuela del perreo intenso de Chalco', 'Espech', '1', 'MC', 
    'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, thats what you see at a toy store. And you must think youre in a toy store, because youre here shopping for an infant named Jeb.',
    current_timestamp, 'https://picsum.photos/609/?random'
);
