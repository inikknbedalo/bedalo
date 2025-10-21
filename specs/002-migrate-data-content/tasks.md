---
description: "Task list for migrating site content to Decap CMS accessibility"
---

# Tasks: Migrate Data Content to Decap CMS Accessible Format

**Input**: Design documents from `/specs/002-migrate-data-content/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: No explicit test requirements specified - tests will be validation tasks to ensure content integrity after migration.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions
- **Web app**: `src/`, `public/` at repository root
- Paths shown below assume web application structure based on plan.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Review existing content structure to understand current JSON/MD file layout
- [x] T002 [P] Verify the current Decap CMS configuration in `public/admin/config.yml`
- [x] T003 [P] Identify all remaining JSON files that need CMS accessibility in `src/data/`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Update Decap CMS configuration to support additional content collections
- [x] T005 [P] Create content schemas for privacy policy, contact, sitemap, and about KKN content
- [x] T006 [P] Ensure build process supports new content collection structure
- [x] T007 Backup existing JSON files before migration process
- [x] T008 [P] Create consolidated site configuration in `src/content/config/site.md`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Standardize Data Management (Priority: P1) 🎯 MVP

**Goal**: Consolidate data management using CMS-accessible formats following framework best practices

**Independent Test**: Can verify that content from existing JSON and MD files is properly migrated to CMS-accessible formats, and that all website functionality continues to work as expected.

### Implementation for User Story 1

- [x] T009 [P] [US1] Consolidate `src/data/footer.json` into `src/content/config/site.md`
- [x] T010 [P] [US1] Consolidate `src/data/index.json` into `src/content/config/site.md`
- [x] T011 [US1] Update `public/admin/config.yml` with privacy policy collection
- [x] T012 [US1] Create content file for privacy policy in `src/content/pages/kebijakan-privasi.md`
- [x] T013 [US1] Update `public/admin/config.yml` with contact information collection
- [x] T014 [US1] Create content file for contact information in `src/content/pages/kontak.md`
- [x] T015 [US1] Update .astro components to read from consolidated site config
- [x] T016 [US1] Verify build process works with new content structure

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Maintain Content Integrity (Priority: P2)

**Goal**: Ensure the migrated content maintains all existing functionality with no visible changes to website users

**Independent Test**: Can verify by comparing website before and after migration to ensure all content displays correctly with no missing information.

### Implementation for User Story 2

- [x] T017 [P] [US2] Update footer component to source data from CMS-configured site.md
- [x] T018 [P] [US2] Update homepage component to source data from CMS-configured site.md
- [x] T019 [US2] Create content file for sitemap in `src/content/pages/peta-situs.md`
- [x] T020 [US2] Update `public/admin/config.yml` with sitemap collection
- [x] T021 [US2] Create content file for about KKN in `src/content/pages/tentang-kkn.md`
- [x] T022 [US2] Update `public/admin/config.yml` with about KKN collection
- [x] T023 [US2] Update contact page to source data from CMS-configured content
- [x] T024 [US2] Update privacy policy page to source data from CMS-configured content
- [x] T025 [US2] Update sitemap page to source data from CMS-configured content
- [x] T026 [US2] Update about KKN page to source data from CMS-configured content

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Enable Future Development (Priority: P3)

**Goal**: Establish proper content structure using Astro's recommended practices for consistent future content additions

**Independent Test**: Can verify by adding new content through the new CMS system and confirming it works correctly.

### Implementation for User Story 3

- [x] T027 [US3] Update remaining .astro files to use CMS-configured content instead of JSON imports
- [x] T028 [US3] Update gallery content to use CMS-configured collection format
- [x] T029 [US3] Validate that all content schemas prevent invalid content structure
- [x] T030 [US3] Verify type checking and IDE support for new content access patterns
- [x] T031 [US3] Update quickstart guide with new content management procedures
- [x] T032 [US3] Document the new content structure for future developers
- [x] T033 [US3] Validate that new content can be added through the CMS interface

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T034 [P] Remove redundant JSON files after CMS migration verification
- [x] T035 [P] Update documentation to reflect new content structure
- [x] T036 Run build validation to ensure no content-related errors
- [x] T037 [P] Update component imports to use new content access patterns consistently
- [x] T038 Verify all website pages load with identical content as before migration
- [x] T039 Test content creation through CMS interface for all new collections
- [x] T040 Run quickstart.md validation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all content consolidation tasks together:
Task: "Consolidate src/data/footer.json into src/content/config/site.md"
Task: "Consolidate src/data/index.json into src/content/config/site.md"
Task: "Create content file for privacy policy in src/content/pages/kebijakan-privasi.md"
Task: "Create content file for contact information in src/content/pages/kontak.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence