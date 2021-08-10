--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: exam; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exam (
    id integer NOT NULL,
    name text NOT NULL,
    semester text NOT NULL,
    link text NOT NULL,
    "subjectId" integer NOT NULL,
    "teacherId" integer NOT NULL,
    "typeId" integer NOT NULL
);


--
-- Name: exam_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.exam_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: exam_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.exam_id_seq OWNED BY public.exam.id;


--
-- Name: subject; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subject (
    id integer NOT NULL,
    name text NOT NULL,
    "termId" integer NOT NULL
);


--
-- Name: subject_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subject_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subject_id_seq OWNED BY public.subject.id;


--
-- Name: teacher; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.teacher (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: teacherSubject; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."teacherSubject" (
    id integer NOT NULL,
    "subjectId" integer NOT NULL,
    "teacherId" integer NOT NULL
);


--
-- Name: teacherSubject_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."teacherSubject_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: teacherSubject_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."teacherSubject_id_seq" OWNED BY public."teacherSubject".id;


--
-- Name: teacher_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.teacher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: teacher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.teacher_id_seq OWNED BY public.teacher.id;


--
-- Name: term; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.term (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: term_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.term_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: term_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.term_id_seq OWNED BY public.term.id;


--
-- Name: type; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.type (
    id integer NOT NULL,
    name text NOT NULL
);


--
-- Name: type_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.type_id_seq OWNED BY public.type.id;


--
-- Name: exam id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exam ALTER COLUMN id SET DEFAULT nextval('public.exam_id_seq'::regclass);


--
-- Name: subject id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject ALTER COLUMN id SET DEFAULT nextval('public.subject_id_seq'::regclass);


--
-- Name: teacher id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teacher ALTER COLUMN id SET DEFAULT nextval('public.teacher_id_seq'::regclass);


--
-- Name: teacherSubject id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."teacherSubject" ALTER COLUMN id SET DEFAULT nextval('public."teacherSubject_id_seq"'::regclass);


--
-- Name: term id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.term ALTER COLUMN id SET DEFAULT nextval('public.term_id_seq'::regclass);


--
-- Name: type id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.type ALTER COLUMN id SET DEFAULT nextval('public.type_id_seq'::regclass);


--
-- Data for Name: exam; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.exam VALUES (1, '2009', '2', 'teste', 20, 4, 1);
INSERT INTO public.exam VALUES (2, '2009', '2', 'teste', 4, 7, 1);
INSERT INTO public.exam VALUES (3, '2009', '2', 'teste', 11, 30, 1);
INSERT INTO public.exam VALUES (4, '2009', '2', 'teste', 21, 7, 3);
INSERT INTO public.exam VALUES (16, '2020', '2', 'https://www.lagoinha.sp.gov.br/arquivos/22514_harry-potter-e-a-camara-secreta-jk-rowling-4-e-5-ano_06044211.pdf', 1, 11, 2);
INSERT INTO public.exam VALUES (17, '1991', '1', 'https://www.lagoinha.sp.v.br/arquivos/22514_harry-potter-e-a-camara-secreta-jk-rowling-4-e-5-ano_06044211.pdf', 3, 14, 1);
INSERT INTO public.exam VALUES (18, '1994', '1', 'https://www.lagoinha.sp.gov.br/arquivos/22514_harry-potter-e-a-camara-secreta-jk-rowlg-4-e-5-ano_06044211.pdf', 5, 2, 1);
INSERT INTO public.exam VALUES (19, '1994', '1', 'https://www.lagoinha.p.gov.br/arquivos/22514_harry-potter-e-a-camara-secreta-jk-rowlg-4-e-5-ano_06044211.pdf', 5, 2, 1);
INSERT INTO public.exam VALUES (20, '1991', '2', 'https://escolareginaaltman.com.br/wp-content/uploads/2020/04/Harry-Potter-e-o-prisioneiro-de-Azkaban.pdf', 16, 6, 1);
INSERT INTO public.exam VALUES (21, '2021', '1', 'https://escolareginaaltman.com.br/-content/uploads/2020/04/Harry-Potter-e-o-prisioneiro-de-Azkaban.pdf', 16, 6, 2);
INSERT INTO public.exam VALUES (22, '2017', '2', 'htps://escolareginaaltman.com.br/wp-content/uploads/2020/04/Harry-Potter-e-o-prisioneiro-de-Azkaban.pdf', 35, 34, 2);
INSERT INTO public.exam VALUES (23, '2010', '1', 'https://escolareginaaltman.comwp-content/uploads/2020/04/Harry-Potter-e-o-prisioneiro-de-Azkaban.pdf', 38, 42, 1);
INSERT INTO public.exam VALUES (24, '2018', '2', 'https://trello.com/b/PNRQYXtk/projeto-repoprovas.pdf', 9, 5, 3);


--
-- Data for Name: subject; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.subject VALUES (1, 'Calculo Diferencial e Integral I', 1);
INSERT INTO public.subject VALUES (2, 'Calculo Diferencial e Integral II', 2);
INSERT INTO public.subject VALUES (3, 'Calculo Diferencial e Integral III', 3);
INSERT INTO public.subject VALUES (4, 'Calculo Diferencial e Integral IV', 4);
INSERT INTO public.subject VALUES (5, 'Quimica Geral I', 1);
INSERT INTO public.subject VALUES (6, 'Quimica Geral II', 2);
INSERT INTO public.subject VALUES (7, 'Quimica Inorgânica I', 2);
INSERT INTO public.subject VALUES (8, 'Quimica Inorganica II', 3);
INSERT INTO public.subject VALUES (9, 'Quimica Organica I', 2);
INSERT INTO public.subject VALUES (10, 'Quimica Organica II', 3);
INSERT INTO public.subject VALUES (11, 'Analise Organica I', 3);
INSERT INTO public.subject VALUES (12, 'Quimica Instrumental I', 6);
INSERT INTO public.subject VALUES (13, 'Quimica Quântica', 7);
INSERT INTO public.subject VALUES (14, 'Termodinãmica', 4);
INSERT INTO public.subject VALUES (15, 'Estatistica', 5);
INSERT INTO public.subject VALUES (16, 'Processos Cineticos', 5);
INSERT INTO public.subject VALUES (17, 'Quimica Ambiental', 13);
INSERT INTO public.subject VALUES (18, 'Bioquimica I', 5);
INSERT INTO public.subject VALUES (19, 'Enzimologia', 13);
INSERT INTO public.subject VALUES (20, 'Química de Alimentos', 13);
INSERT INTO public.subject VALUES (21, 'Química Forense', 13);
INSERT INTO public.subject VALUES (22, 'Polímeros', 13);
INSERT INTO public.subject VALUES (23, 'Combustiveis', 13);
INSERT INTO public.subject VALUES (24, 'Síntese de Fármacos', 13);
INSERT INTO public.subject VALUES (25, 'Eletroquimica', 8);
INSERT INTO public.subject VALUES (26, 'Quimica Industrial I', 7);
INSERT INTO public.subject VALUES (27, 'Quimica Industrial II', 8);
INSERT INTO public.subject VALUES (28, 'Fenomenos de Superficie', 5);
INSERT INTO public.subject VALUES (29, 'Espectroscopia Termodinânmica Estatística', 7);
INSERT INTO public.subject VALUES (30, 'Fisico-Quimica I', 4);
INSERT INTO public.subject VALUES (31, 'Fisico-Quimica II', 5);
INSERT INTO public.subject VALUES (32, 'Cinetica Quimica Avançada', 8);
INSERT INTO public.subject VALUES (33, 'Sistemas Projetivos', 8);
INSERT INTO public.subject VALUES (34, 'Desenho Técnico', 1);
INSERT INTO public.subject VALUES (35, 'Computação', 4);
INSERT INTO public.subject VALUES (36, 'Toxicologia Ambiental', 13);
INSERT INTO public.subject VALUES (37, 'Fund de Engenharia Bioquimica', 13);
INSERT INTO public.subject VALUES (38, 'Calculo de Reatores', 13);
INSERT INTO public.subject VALUES (39, 'Termodinamica II', 13);
INSERT INTO public.subject VALUES (40, 'Cinetica e Calculo de Reatores', 13);
INSERT INTO public.subject VALUES (41, 'Transferencia de Calor e Massa', 13);
INSERT INTO public.subject VALUES (42, 'Metalurgia dos Nao-Ferrosos', 13);
INSERT INTO public.subject VALUES (43, 'Corrosao', 13);
INSERT INTO public.subject VALUES (44, 'Gestão Tecnológica', 13);
INSERT INTO public.subject VALUES (45, 'Cristalografia', 13);
INSERT INTO public.subject VALUES (46, 'Trat de Residuos Quim de Lab', 13);
INSERT INTO public.subject VALUES (47, 'Criminalística I', 13);
INSERT INTO public.subject VALUES (48, 'Criminalística II', 13);


--
-- Data for Name: teacher; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.teacher VALUES (1, 'Paulo Roberto de Assis');
INSERT INTO public.teacher VALUES (2, 'Roberto Farias');
INSERT INTO public.teacher VALUES (3, 'Marciela Scarpelini');
INSERT INTO public.teacher VALUES (4, 'Simone Vendramel');
INSERT INTO public.teacher VALUES (5, 'Lidia Yokoyama');
INSERT INTO public.teacher VALUES (6, 'Eliane Elias');
INSERT INTO public.teacher VALUES (7, 'Roberto Marchiori');
INSERT INTO public.teacher VALUES (8, 'Reginaldo Menezes');
INSERT INTO public.teacher VALUES (9, 'Kelly de Moraes');
INSERT INTO public.teacher VALUES (10, 'Felipe Rodrigues');
INSERT INTO public.teacher VALUES (11, 'Ramon Melo');
INSERT INTO public.teacher VALUES (12, 'Lucas Lima');
INSERT INTO public.teacher VALUES (13, 'Adriana Figueira');
INSERT INTO public.teacher VALUES (14, 'Thais Nunes');
INSERT INTO public.teacher VALUES (15, 'Victoria Barros');
INSERT INTO public.teacher VALUES (16, 'Flavia Barbosa');
INSERT INTO public.teacher VALUES (17, 'Raphael Freitas');
INSERT INTO public.teacher VALUES (18, 'Ciro Carvalho');
INSERT INTO public.teacher VALUES (19, 'Raissa Martins');
INSERT INTO public.teacher VALUES (20, 'Cayo Lima');
INSERT INTO public.teacher VALUES (21, 'Valeria Lessa');
INSERT INTO public.teacher VALUES (22, 'Cesar dos Santos');
INSERT INTO public.teacher VALUES (23, 'Patricia Soares');
INSERT INTO public.teacher VALUES (24, 'Bruna Zonta');
INSERT INTO public.teacher VALUES (25, 'João Pedro Medeiros');
INSERT INTO public.teacher VALUES (26, 'Murillo Ribeiro');
INSERT INTO public.teacher VALUES (27, 'Patrick Modenesi');
INSERT INTO public.teacher VALUES (28, 'Carine de Souza');
INSERT INTO public.teacher VALUES (29, 'Roberta Schossler');
INSERT INTO public.teacher VALUES (30, 'Ignez Campos');
INSERT INTO public.teacher VALUES (31, 'Mayara Lima');
INSERT INTO public.teacher VALUES (32, 'Matheus Santana');
INSERT INTO public.teacher VALUES (33, 'Vanessa Braz');
INSERT INTO public.teacher VALUES (34, 'Bruno Rezende');
INSERT INTO public.teacher VALUES (35, 'Douglas Souza');
INSERT INTO public.teacher VALUES (36, 'Jessica Silva');
INSERT INTO public.teacher VALUES (37, 'Mariana Joana Silva');
INSERT INTO public.teacher VALUES (38, 'Teresa Silva');
INSERT INTO public.teacher VALUES (39, 'Tatiana Martins');
INSERT INTO public.teacher VALUES (40, 'Eduardo Silva');
INSERT INTO public.teacher VALUES (41, 'Felipe Silva');
INSERT INTO public.teacher VALUES (42, 'Maira Medeiros');


--
-- Data for Name: teacherSubject; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."teacherSubject" VALUES (1, 17, 1);
INSERT INTO public."teacherSubject" VALUES (2, 36, 1);
INSERT INTO public."teacherSubject" VALUES (3, 5, 2);
INSERT INTO public."teacherSubject" VALUES (4, 6, 2);
INSERT INTO public."teacherSubject" VALUES (5, 46, 2);
INSERT INTO public."teacherSubject" VALUES (6, 5, 3);
INSERT INTO public."teacherSubject" VALUES (7, 6, 3);
INSERT INTO public."teacherSubject" VALUES (8, 7, 3);
INSERT INTO public."teacherSubject" VALUES (9, 7, 4);
INSERT INTO public."teacherSubject" VALUES (10, 8, 4);
INSERT INTO public."teacherSubject" VALUES (11, 7, 5);
INSERT INTO public."teacherSubject" VALUES (12, 8, 5);
INSERT INTO public."teacherSubject" VALUES (13, 9, 6);
INSERT INTO public."teacherSubject" VALUES (14, 10, 6);
INSERT INTO public."teacherSubject" VALUES (15, 11, 6);
INSERT INTO public."teacherSubject" VALUES (16, 9, 7);
INSERT INTO public."teacherSubject" VALUES (17, 11, 7);
INSERT INTO public."teacherSubject" VALUES (18, 10, 8);
INSERT INTO public."teacherSubject" VALUES (19, 11, 8);
INSERT INTO public."teacherSubject" VALUES (20, 12, 9);
INSERT INTO public."teacherSubject" VALUES (21, 30, 9);
INSERT INTO public."teacherSubject" VALUES (22, 31, 9);
INSERT INTO public."teacherSubject" VALUES (23, 39, 10);
INSERT INTO public."teacherSubject" VALUES (24, 41, 10);
INSERT INTO public."teacherSubject" VALUES (25, 14, 11);
INSERT INTO public."teacherSubject" VALUES (26, 39, 11);
INSERT INTO public."teacherSubject" VALUES (27, 15, 12);
INSERT INTO public."teacherSubject" VALUES (28, 18, 13);
INSERT INTO public."teacherSubject" VALUES (29, 19, 13);
INSERT INTO public."teacherSubject" VALUES (30, 37, 13);
INSERT INTO public."teacherSubject" VALUES (31, 19, 14);
INSERT INTO public."teacherSubject" VALUES (32, 37, 14);
INSERT INTO public."teacherSubject" VALUES (33, 18, 15);
INSERT INTO public."teacherSubject" VALUES (34, 20, 16);
INSERT INTO public."teacherSubject" VALUES (35, 18, 17);
INSERT INTO public."teacherSubject" VALUES (36, 24, 17);
INSERT INTO public."teacherSubject" VALUES (37, 24, 18);
INSERT INTO public."teacherSubject" VALUES (38, 28, 19);
INSERT INTO public."teacherSubject" VALUES (39, 29, 19);
INSERT INTO public."teacherSubject" VALUES (40, 28, 20);
INSERT INTO public."teacherSubject" VALUES (41, 29, 20);
INSERT INTO public."teacherSubject" VALUES (42, 32, 20);
INSERT INTO public."teacherSubject" VALUES (43, 42, 21);
INSERT INTO public."teacherSubject" VALUES (44, 21, 22);
INSERT INTO public."teacherSubject" VALUES (45, 21, 23);
INSERT INTO public."teacherSubject" VALUES (46, 22, 24);
INSERT INTO public."teacherSubject" VALUES (47, 25, 25);
INSERT INTO public."teacherSubject" VALUES (48, 23, 26);
INSERT INTO public."teacherSubject" VALUES (49, 25, 27);
INSERT INTO public."teacherSubject" VALUES (50, 43, 27);
INSERT INTO public."teacherSubject" VALUES (51, 43, 28);
INSERT INTO public."teacherSubject" VALUES (52, 44, 29);
INSERT INTO public."teacherSubject" VALUES (53, 45, 29);
INSERT INTO public."teacherSubject" VALUES (54, 35, 30);
INSERT INTO public."teacherSubject" VALUES (55, 35, 31);
INSERT INTO public."teacherSubject" VALUES (56, 33, 32);
INSERT INTO public."teacherSubject" VALUES (57, 34, 32);
INSERT INTO public."teacherSubject" VALUES (58, 26, 33);
INSERT INTO public."teacherSubject" VALUES (59, 27, 33);
INSERT INTO public."teacherSubject" VALUES (60, 40, 33);
INSERT INTO public."teacherSubject" VALUES (61, 26, 34);
INSERT INTO public."teacherSubject" VALUES (62, 27, 34);
INSERT INTO public."teacherSubject" VALUES (63, 40, 34);
INSERT INTO public."teacherSubject" VALUES (64, 14, 35);
INSERT INTO public."teacherSubject" VALUES (65, 39, 35);
INSERT INTO public."teacherSubject" VALUES (66, 47, 36);
INSERT INTO public."teacherSubject" VALUES (67, 48, 36);
INSERT INTO public."teacherSubject" VALUES (68, 30, 37);
INSERT INTO public."teacherSubject" VALUES (69, 31, 37);
INSERT INTO public."teacherSubject" VALUES (70, 23, 37);
INSERT INTO public."teacherSubject" VALUES (71, 7, 38);
INSERT INTO public."teacherSubject" VALUES (72, 8, 38);
INSERT INTO public."teacherSubject" VALUES (73, 1, 39);
INSERT INTO public."teacherSubject" VALUES (74, 2, 39);
INSERT INTO public."teacherSubject" VALUES (75, 3, 39);
INSERT INTO public."teacherSubject" VALUES (76, 4, 39);
INSERT INTO public."teacherSubject" VALUES (77, 1, 40);
INSERT INTO public."teacherSubject" VALUES (78, 2, 40);
INSERT INTO public."teacherSubject" VALUES (79, 4, 40);
INSERT INTO public."teacherSubject" VALUES (80, 3, 41);
INSERT INTO public."teacherSubject" VALUES (81, 4, 41);
INSERT INTO public."teacherSubject" VALUES (82, 1, 42);
INSERT INTO public."teacherSubject" VALUES (83, 3, 42);


--
-- Data for Name: term; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.term VALUES (1, '1º Período');
INSERT INTO public.term VALUES (2, '2º Período');
INSERT INTO public.term VALUES (3, '3º Período');
INSERT INTO public.term VALUES (4, '4º Período');
INSERT INTO public.term VALUES (5, '5º Período');
INSERT INTO public.term VALUES (6, '6º Período');
INSERT INTO public.term VALUES (7, '7º Período');
INSERT INTO public.term VALUES (8, '8º Período');
INSERT INTO public.term VALUES (9, '9º Período');
INSERT INTO public.term VALUES (10, '10º Período');
INSERT INTO public.term VALUES (11, '11º Período');
INSERT INTO public.term VALUES (12, '12º Período');
INSERT INTO public.term VALUES (13, 'Eletiva');


--
-- Data for Name: type; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.type VALUES (1, 'P1');
INSERT INTO public.type VALUES (2, 'P2');
INSERT INTO public.type VALUES (3, 'PF');
INSERT INTO public.type VALUES (4, '2ªCh');


--
-- Name: exam_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.exam_id_seq', 24, true);


--
-- Name: subject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subject_id_seq', 48, true);


--
-- Name: teacherSubject_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."teacherSubject_id_seq"', 83, true);


--
-- Name: teacher_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.teacher_id_seq', 42, true);


--
-- Name: term_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.term_id_seq', 13, true);


--
-- Name: type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.type_id_seq', 4, true);


--
-- Name: exam exams_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exam
    ADD CONSTRAINT exams_pk PRIMARY KEY (id);


--
-- Name: subject subjects_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT subjects_pk PRIMARY KEY (id);


--
-- Name: teacherSubject teachers-subjects_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."teacherSubject"
    ADD CONSTRAINT "teachers-subjects_pk" PRIMARY KEY (id);


--
-- Name: teacher teachers_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.teacher
    ADD CONSTRAINT teachers_pk PRIMARY KEY (id);


--
-- Name: term terms_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.term
    ADD CONSTRAINT terms_pk PRIMARY KEY (id);


--
-- Name: type types_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.type
    ADD CONSTRAINT types_pk PRIMARY KEY (id);


--
-- Name: exam examSubject_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exam
    ADD CONSTRAINT "examSubject_fk" FOREIGN KEY ("subjectId") REFERENCES public.subject(id);


--
-- Name: exam examTeacher_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exam
    ADD CONSTRAINT "examTeacher_fk" FOREIGN KEY ("teacherId") REFERENCES public.teacher(id);


--
-- Name: subject subjectTerm_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subject
    ADD CONSTRAINT "subjectTerm_fk" FOREIGN KEY ("termId") REFERENCES public.term(id);


--
-- Name: teacherSubject teacherSubjectMiddleSubId_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."teacherSubject"
    ADD CONSTRAINT "teacherSubjectMiddleSubId_fk" FOREIGN KEY ("subjectId") REFERENCES public.subject(id);


--
-- Name: teacherSubject teacherSubjectMiddleTeaId_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."teacherSubject"
    ADD CONSTRAINT "teacherSubjectMiddleTeaId_fk" FOREIGN KEY ("teacherId") REFERENCES public.teacher(id);


--
-- PostgreSQL database dump complete
--

