-- INSTITUCIONES
INSERT INTO polls_institution VALUES (1, 'Instituto Patrulla');
INSERT INTO polls_institution VALUES (2, 'Escuela Patito');
INSERT INTO polls_institution VALUES (3, 'Universidad Politécnica del Barrio');

-- SEDES
INSERT INTO polls_branch (name, institution_id, state_id) VALUES (
    'Universidad del Aguacate', '3', 'AS'
);
INSERT INTO polls_branch (name, institution_id, state_id) VALUES (
    'Universidad del Camote', '3', 'PL'
);
INSERT INTO polls_branch (name, institution_id, state_id) VALUES (
    'Escuela del Estado del Perrito', '2', 'SP'
);
INSERT INTO polls_branch (name, institution_id, state_id) VALUES (
    'ICKKCK', '1', 'SR'
);
INSERT INTO polls_branch (name, institution_id, state_id) VALUES (
    'Escuela del Valle', '1', 'DF'
);
INSERT INTO polls_branch (name, institution_id, state_id) VALUES (
    'Universidad del Águila', '2', 'DF'
);
INSERT INTO polls_branch (name, institution_id, state_id) VALUES (
    'Instituto de las Carmelitas con Botas', '3', 'DF'
);
