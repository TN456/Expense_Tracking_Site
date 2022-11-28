package com.boomi.expense.model;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonAlias;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Expenses_Tables")
public class Expense {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "expense_name")
	@NotBlank(message = "Expense name must not be null")
	@Size(min = 5, message = "Expense name must be atleast 5 characters")
	private String name;

	@Column(name = "expense_amount")
	@NotNull(message = "Expense amount should not be null")
	private BigDecimal amount;

	@NotBlank(message = "Category should not be null")
	private String category;

	@NotNull(message = "Date must not be null")
	private Date date;

	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name="user_id",nullable=false)
	@OnDelete(action = OnDeleteAction.CASCADE)
	private User user;
}





