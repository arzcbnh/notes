---
title: Java Persistence API (JPA) for Spring
category: misc
position: 40
---

#### Base annotations

-   `@Entity`: the model of an object
-   `@Table(name = <string>)`
-   `@Column(length = <number>, nullable = <boolean>)`

##### ID annotations

-   `@Id`
-   `@GeneratedValue(strategy = <member of GenerationType>)`

#### Constraints

-   `@NotBlank`
-   `@NotEmpty`
-   `@Past`
-   `@Email`
-   `@Size`
-   `@Valid`

extends JpaRepository<EntityType, long>

#### Relations

-   `@ManyToOne`
-   `@JoinColumn(name = "column_name")`

@ManyToMany
@JoinTable(
name = "table1_table2",
joinColumns = @JoinColumn(name = "column1_name"),
inverseJoinColumns = @JoinColumn(name = "column2_name")
)

@JsonIgnore

@Query(nativeQuery = true, value = "")
@Param
