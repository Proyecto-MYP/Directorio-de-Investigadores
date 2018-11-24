-- INSTITUCIONES
INSERT INTO polls_institution VALUES (1, 'Instituto Patrulla', current_timestamp);
INSERT INTO polls_institution VALUES (2, 'Escuela Patito', current_timestamp);
INSERT INTO polls_institution VALUES (3, 'Universidad Politécnica del Barrio', current_timestamp);

-- SEDES
INSERT INTO polls_branch (name, institution_id, state_id, created_at) VALUES (
    'Universidad del Aguacate', '3', 'AS', current_timestamp
);
INSERT INTO polls_branch (name, institution_id, state_id, created_at) VALUES (
    'Universidad del Camote', '3', 'PL', current_timestamp
);
INSERT INTO polls_branch (name, institution_id, state_id, created_at) VALUES (
    'Escuela del Estado del Perrito', '2', 'SP', current_timestamp
);
INSERT INTO polls_branch (name, institution_id, state_id, created_at) VALUES (
    'ICKKCK', '1', 'SR', current_timestamp
);
INSERT INTO polls_branch (name, institution_id, state_id, created_at) VALUES (
    'Escuela del Valle', '1', 'DF', current_timestamp
);
INSERT INTO polls_branch (name, institution_id, state_id, created_at) VALUES (
    'Universidad del Águila', '2', 'DF', current_timestamp
);
INSERT INTO polls_branch (name, institution_id, state_id, created_at) VALUES (
    'Instituto de las Carmelitas con Botas', '3', 'DF', current_timestamp
);
INSERT INTO polls_branch (name, institution_id, state_id, created_at) VALUES (
    'Escuela del perreo intenso de Chalco', '1', 'MC', current_timestamp
);
