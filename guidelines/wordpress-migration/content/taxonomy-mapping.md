# Taxonomy Mapping Strategy

**Status:** Draft  
**Context:** Mapping React mock data categories/tags to WordPress Taxonomies.

## 1. Standard Post Taxonomies

### 1.1 Categories (`category`)
| React Slug | WordPress Name | Description | Parent |
| :--- | :--- | :--- | :--- |
| `nuus` | Nuus | Algemene nuusberigte | - |
| `sport` | Sport | Sportnuus en uitslae | - |
| `sake` | Sake | Besigheidsnuus en ekonomie | - |
| `leefstyl` | Leefstyl | Kos, reise, en vermaak | - |
| `dink` | Dink | Opinies en rubrieke | - |
| `skole` | Skole | Skolenuus | - |
| `skolerugby` | Skole Rugby | Skolerugby wedstryde | `skole` |

### 1.2 Tags (`post_tag`)
| React Slug | WordPress Name |
| :--- | :--- |
| `aktueel` | Aktueel |
| `politiek` | Politiek |
| `misdaad` | Misdaad |
| `rugby` | Rugby |
| `sokker` | Sokker |
| `ekonomie` | Ekonomie |
| `plaaslik` | Plaaslik |
| `munisipaliteit` | Munisipaliteit |
| `onderwys` | Onderwys |
| `kuns-en-kultuur` | Kuns en Kultuur |
| `omgewing` | Omgewing |
| `verkeer` | Verkeer |

---

## 2. Custom Taxonomies

### 2.1 Event Categories (`dp_event_category`)
*   `plaaslik` (Plaaslik)
*   `sport` (Sport)
*   `kuns` (Kuns)
*   `sake` (Sake)
*   `mark` (Mark)
*   `literatuur` (Literatuur)
*   `kos` (Kos)

### 2.2 Competition Categories (`dp_competition_category`)
*   `inkopies` (Inkopies)
*   `sport` (Sport)
*   `reis` (Reis)
*   `lewenstyl` (Lewenstyl)
*   `tegnologie` (Tegnologie)
*   `kos-en-wyn` (Kos & Wyn)
*   `buitelug` (Buitelug)
*   `vermaak` (Vermaak)
*   `kultuur` (Kultuur)
*   `gesondheid` (Gesondheid)
*   `huis-en-tuin` (Huis & Tuin)

### 2.3 Multimedia Categories (`dp_multimedia_category`)
*   `video` (Video)
*   `fotogalery` (Fotogalery)
*   `podcast` (Podcast)

---

## 3. Implementation Logic

When running the import script:
1.  **Check Term Existence:** `term_exists($slug, $taxonomy)`
2.  **Create if Missing:** `wp_insert_term($name, $taxonomy, ['slug' => $slug])`
3.  **Assign to Post:** `wp_set_object_terms($post_id, $slug, $taxonomy)`

**Note on Hierarchy:**
For `Skole Rugby`, ensure `Skole` is created first, get its ID, and pass it as `parent` when creating `Skole Rugby`.
