package com.librarybook.example.main;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibraryJpaRepository extends JpaRepository<Library, Long>{
}